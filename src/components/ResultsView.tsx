import type { Question } from "@/lib/exams/types";

interface GradedQuestion {
  question: Question;
  selected: string[];
  correct: boolean;
}

interface ResultsViewProps {
  graded: GradedQuestion[];
  mode: "practice" | "exam";
  onRestart: () => void;
  onBackToExams: () => void;
}

export default function ResultsView({
  graded,
  mode,
  onRestart,
  onBackToExams,
}: ResultsViewProps) {
  const total = graded.length;
  const correctCount = graded.filter((g) => g.correct).length;
  const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const topicMap = new Map<string, { correct: number; total: number }>();
  for (const g of graded) {
    const topic = g.question.topic ?? "General";
    const entry = topicMap.get(topic) ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (g.correct) entry.correct += 1;
    topicMap.set(topic, entry);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 p-8 text-center shadow-sm">
        <p className="text-sm uppercase tracking-wide text-black/50 dark:text-white/50 mb-2">
          {mode === "practice" ? "Practice session complete" : "Exam simulation complete"}
        </p>
        <p className="text-5xl font-bold mb-1">{percent}%</p>
        <p className="text-black/60 dark:text-white/60">
          {correctCount} of {total} correct
        </p>
        <p className="mt-4 text-xs text-black/40 dark:text-white/40 max-w-md mx-auto">
          Microsoft doesn&apos;t publish an exact passing percentage — treat this
          as a study signal, not an official prediction of your exam result.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={onRestart}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
          >
            Try again
          </button>
          <button
            onClick={onBackToExams}
            className="rounded-lg border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            Back to exams
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 p-6 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50 mb-4">
          Breakdown by topic
        </h2>
        <div className="flex flex-col gap-3">
          {Array.from(topicMap.entries()).map(([topic, stat]) => {
            const pct = Math.round((stat.correct / stat.total) * 100);
            return (
              <div key={topic}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{topic}</span>
                  <span className="text-black/50 dark:text-white/50">
                    {stat.correct}/{stat.total}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-indigo-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
          Review answers
        </h2>
        {graded.map((g, i) => (
          <div
            key={g.question.id}
            className="rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <p className="font-medium">
                {i + 1}. {g.question.prompt}
              </p>
              <span
                className={`shrink-0 text-xs font-semibold rounded-full px-2 py-0.5 ${
                  g.correct
                    ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                    : "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300"
                }`}
              >
                {g.correct ? "Correct" : "Incorrect"}
              </span>
            </div>
            <ul className="text-sm space-y-1 mb-3">
              {g.question.choices.map((choice) => {
                const wasSelected = g.selected.includes(choice.id);
                const isCorrect = g.question.correctChoiceIds.includes(choice.id);
                return (
                  <li
                    key={choice.id}
                    className={
                      isCorrect
                        ? "text-emerald-700 dark:text-emerald-300 font-medium"
                        : wasSelected
                          ? "text-red-700 dark:text-red-300"
                          : "text-black/60 dark:text-white/50"
                    }
                  >
                    {isCorrect ? "✓" : wasSelected ? "✗" : "•"} {choice.text}
                  </li>
                );
              })}
            </ul>
            <p className="text-sm text-black/70 dark:text-white/70">
              {g.question.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
