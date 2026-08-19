"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  PencilLine,
  Play,
  Timer,
} from "lucide-react";
import type { Exam, Question } from "@/lib/exams/types";
import { shuffle } from "@/lib/shuffle";
import { saveAttempt } from "@/lib/storage";
import QuestionCard from "@/components/QuestionCard";
import ResultsView from "@/components/ResultsView";

type Mode = "practice" | "exam";
type Stage = "setup" | "running" | "results";

const SECONDS_PER_QUESTION = 90;

function buildSessionQuestions(exam: Exam, count: number): Question[] {
  const picked = shuffle(exam.questions).slice(0, count);
  return picked.map((q) => ({ ...q, choices: shuffle(q.choices) }));
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ExamRunner({ exam }: { exam: Exam }) {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>("setup");
  const [mode, setMode] = useState<Mode>("practice");
  const [count, setCount] = useState(Math.min(10, exam.questions.length));

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [secondsLeft, setSecondsLeft] = useState(0);

  const maxCount = exam.questions.length;
  const countOptions = useMemo(() => {
    const opts = [5, 10, 20, 40].filter((n) => n < maxCount);
    opts.push(maxCount);
    return Array.from(new Set(opts)).sort((a, b) => a - b);
  }, [maxCount]);

  useEffect(() => {
    if (stage !== "running" || mode !== "exam") return;
    if (secondsLeft <= 0) {
      finish();
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, mode, secondsLeft]);

  function start() {
    const session = buildSessionQuestions(exam, count);
    setQuestions(session);
    setAnswers({});
    setChecked({});
    setCurrentIndex(0);
    setSecondsLeft(count * SECONDS_PER_QUESTION);
    setStage("running");
  }

  function toggleChoice(question: Question, choiceId: string) {
    if (mode === "practice" && checked[question.id]) return;
    setAnswers((prev) => {
      const current = prev[question.id] ?? [];
      if (question.type === "single") {
        return { ...prev, [question.id]: [choiceId] };
      }
      const next = current.includes(choiceId)
        ? current.filter((id) => id !== choiceId)
        : [...current, choiceId];
      return { ...prev, [question.id]: next };
    });
  }

  function checkAnswer(questionId: string) {
    setChecked((prev) => ({ ...prev, [questionId]: true }));
  }

  function goNext() {
    setCurrentIndex((i) => Math.min(i + 1, questions.length - 1));
  }

  function goPrev() {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }

  function finish() {
    const graded = questions.map((q) => {
      const selected = answers[q.id] ?? [];
      const correct =
        selected.length === q.correctChoiceIds.length &&
        selected.every((id) => q.correctChoiceIds.includes(id));
      return { correct };
    });
    const score = graded.filter((g) => g.correct).length;
    saveAttempt({
      examSlug: exam.slug,
      mode,
      score,
      total: questions.length,
      completedAt: new Date().toISOString(),
    });
    setStage("results");
  }

  function restart() {
    setStage("setup");
  }

  if (stage === "setup") {
    return (
      <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 p-8 shadow-sm max-w-xl animate-card-enter">
        <h2 className="text-lg font-semibold mb-6">Configure your session</h2>

        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Mode</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={() => setMode("practice")}
              className={`flex-1 rounded-lg border px-4 py-3 text-sm text-left transition-[colors,transform] active:scale-[0.98] ${
                mode === "practice"
                  ? "border-accent bg-accent-soft dark:bg-accent/10"
                  : "border-black/10 dark:border-white/15 hover:border-black/30"
              }`}
            >
              <span className="flex items-center gap-2 font-medium">
                <PencilLine size={16} strokeWidth={2} className="text-accent" />
                Practice
              </span>
              <span className="block text-black/50 dark:text-white/50 text-xs mt-0.5">
                Instant feedback + explanations, no timer
              </span>
            </button>
            <button
              onClick={() => setMode("exam")}
              className={`flex-1 rounded-lg border px-4 py-3 text-sm text-left transition-[colors,transform] active:scale-[0.98] ${
                mode === "exam"
                  ? "border-accent bg-accent-soft dark:bg-accent/10"
                  : "border-black/10 dark:border-white/15 hover:border-black/30"
              }`}
            >
              <span className="flex items-center gap-2 font-medium">
                <Timer size={16} strokeWidth={2} className="text-accent" />
                Exam simulation
              </span>
              <span className="block text-black/50 dark:text-white/50 text-xs mt-0.5">
                Timed, feedback only at the end
              </span>
            </button>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm font-medium mb-2">Number of questions</p>
          <div className="flex flex-wrap gap-2">
            {countOptions.map((n) => (
              <button
                key={n}
                onClick={() => setCount(n)}
                className={`rounded-lg border px-3 py-2 text-sm transition-[colors,transform] active:scale-[0.97] ${
                  count === n
                    ? "border-accent bg-accent-soft dark:bg-accent/10"
                    : "border-black/10 dark:border-white/15 hover:border-black/30"
                }`}
              >
                {n === maxCount ? `All (${n})` : n}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={start}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white transition-[colors,transform] hover:bg-accent/90 active:scale-[0.98]"
        >
          <Play size={16} strokeWidth={2} />
          Start
        </button>
      </div>
    );
  }

  if (stage === "results") {
    const graded = questions.map((q) => {
      const selected = answers[q.id] ?? [];
      const correct =
        selected.length === q.correctChoiceIds.length &&
        selected.every((id) => q.correctChoiceIds.includes(id));
      return { question: q, selected, correct };
    });
    return (
      <ResultsView
        graded={graded}
        mode={mode}
        onRestart={restart}
        onBackToExams={() => router.push("/")}
      />
    );
  }

  const question = questions[currentIndex];
  const selected = answers[question.id] ?? [];
  const isChecked = mode === "practice" && !!checked[question.id];
  const isLast = currentIndex === questions.length - 1;

  const answeredCount = questions.filter((q) => answers[q.id]).length;
  const showDots = questions.length <= 30;

  return (
    <div className="flex flex-col gap-5 max-w-2xl">
      <div className="flex flex-col gap-2 text-sm text-black/50 dark:text-white/50 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {showDots ? (
          <div className="flex flex-wrap gap-1.5">
            {questions.map((q, i) => (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(i)}
                className="-m-1.5 p-1.5 transition-transform active:scale-90"
                aria-label={`Go to question ${i + 1}`}
              >
                <span
                  className={`block h-2 w-6 rounded-full transition-colors ${
                    i === currentIndex
                      ? "bg-accent"
                      : answers[q.id]
                        ? "bg-accent/40"
                        : "bg-black/10 dark:bg-white/15"
                  }`}
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="flex-1">
            <div className="h-2 rounded-full bg-black/10 dark:bg-white/15 overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-300 ease-out"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-xs">
              <span>
                {answeredCount} of {questions.length} answered
              </span>
              <label className="flex items-center gap-1.5">
                Jump to
                <input
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  min={1}
                  max={questions.length}
                  value={currentIndex + 1}
                  onChange={(e) => {
                    const n = Number(e.target.value);
                    if (n >= 1 && n <= questions.length) {
                      setCurrentIndex(n - 1);
                    }
                  }}
                  className="w-14 rounded border border-black/15 dark:border-white/20 bg-transparent px-1.5 py-1 text-center"
                />
              </label>
            </div>
          </div>
        )}
        {mode === "exam" && (
          <span className="flex items-center gap-1.5 font-mono tabular-nums shrink-0">
            <Clock size={14} strokeWidth={2} />
            {formatTime(secondsLeft)}
          </span>
        )}
      </div>

      <QuestionCard
        key={question.id}
        question={question}
        index={currentIndex}
        total={questions.length}
        selected={selected}
        revealed={isChecked}
        onToggle={(choiceId) => toggleChoice(question, choiceId)}
      />

      <div className="flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          aria-label="Previous question"
          className="flex items-center gap-1.5 rounded-lg border border-black/15 dark:border-white/20 px-4 py-2.5 text-sm font-medium transition-[colors,transform] disabled:opacity-40 hover:bg-black/5 dark:hover:bg-white/10 active:scale-[0.97]"
        >
          <ChevronLeft size={16} strokeWidth={2} />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex gap-2">
          {mode === "practice" && !isChecked && (
            <button
              onClick={() => checkAnswer(question.id)}
              disabled={selected.length === 0}
              className="flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-[colors,transform] disabled:opacity-40 hover:bg-accent/90 active:scale-[0.97]"
            >
              <Check size={16} strokeWidth={2} />
              Check answer
            </button>
          )}
          {!isLast ? (
            <button
              onClick={goNext}
              aria-label="Next question"
              className="flex items-center gap-1.5 rounded-lg border border-black/15 dark:border-white/20 px-4 py-2.5 text-sm font-medium transition-[colors,transform] hover:bg-black/5 dark:hover:bg-white/10 active:scale-[0.97]"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          ) : (
            <button
              onClick={finish}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition-[colors,transform] hover:bg-emerald-500 active:scale-[0.97]"
            >
              <Flag size={16} strokeWidth={2} />
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
