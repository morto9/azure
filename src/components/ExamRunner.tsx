"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
      <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 p-8 shadow-sm max-w-xl">
        <h2 className="text-lg font-semibold mb-6">Configure your session</h2>

        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Mode</p>
          <div className="flex gap-2">
            <button
              onClick={() => setMode("practice")}
              className={`flex-1 rounded-lg border px-4 py-3 text-sm text-left transition-colors ${
                mode === "practice"
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10"
                  : "border-black/10 dark:border-white/15 hover:border-black/30"
              }`}
            >
              <span className="block font-medium">Practice</span>
              <span className="block text-black/50 dark:text-white/50 text-xs mt-0.5">
                Instant feedback + explanations, no timer
              </span>
            </button>
            <button
              onClick={() => setMode("exam")}
              className={`flex-1 rounded-lg border px-4 py-3 text-sm text-left transition-colors ${
                mode === "exam"
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10"
                  : "border-black/10 dark:border-white/15 hover:border-black/30"
              }`}
            >
              <span className="block font-medium">Exam simulation</span>
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
                className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                  count === n
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10"
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
          className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
        >
          Start
        </button>
        <Link
          href="/"
          className="block text-center text-sm text-black/50 dark:text-white/50 hover:underline mt-4"
        >
          Back to exams
        </Link>
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

  return (
    <div className="flex flex-col gap-5 max-w-2xl">
      <div className="flex items-center justify-between text-sm text-black/50 dark:text-white/50">
        <div className="flex gap-1.5">
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 w-6 rounded-full transition-colors ${
                i === currentIndex
                  ? "bg-indigo-600"
                  : answers[q.id]
                    ? "bg-indigo-300 dark:bg-indigo-500/50"
                    : "bg-black/10 dark:bg-white/15"
              }`}
              aria-label={`Go to question ${i + 1}`}
            />
          ))}
        </div>
        {mode === "exam" && (
          <span className="font-mono tabular-nums">{formatTime(secondsLeft)}</span>
        )}
      </div>

      <QuestionCard
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
          className="rounded-lg border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium disabled:opacity-40 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          Previous
        </button>

        <div className="flex gap-2">
          {mode === "practice" && !isChecked && (
            <button
              onClick={() => checkAnswer(question.id)}
              disabled={selected.length === 0}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 hover:bg-indigo-500 transition-colors"
            >
              Check answer
            </button>
          )}
          {!isLast ? (
            <button
              onClick={goNext}
              className="rounded-lg border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={finish}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500 transition-colors"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
