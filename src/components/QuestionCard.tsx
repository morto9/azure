import type { Question } from "@/lib/exams/types";

interface QuestionCardProps {
  question: Question;
  index: number;
  total: number;
  selected: string[];
  revealed: boolean;
  onToggle: (choiceId: string) => void;
}

export default function QuestionCard({
  question,
  index,
  total,
  selected,
  revealed,
  onToggle,
}: QuestionCardProps) {
  const isMulti = question.type === "multi";
  const isCorrectOverall =
    revealed &&
    selected.length === question.correctChoiceIds.length &&
    selected.every((id) => question.correctChoiceIds.includes(id));

  return (
    <div className="rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-3">
        <span className="text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
          Question {index + 1} of {total}
          {question.topic ? ` · ${question.topic}` : ""}
        </span>
        {isMulti && (
          <span className="text-xs rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 font-medium">
            Select all that apply
          </span>
        )}
      </div>

      <p className="text-lg font-medium leading-relaxed mb-5">{question.prompt}</p>

      <div className="flex flex-col gap-2">
        {question.choices.map((choice) => {
          const isSelected = selected.includes(choice.id);
          const isCorrectChoice = question.correctChoiceIds.includes(choice.id);

          let stateClasses =
            "border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30";
          if (revealed) {
            if (isCorrectChoice) {
              stateClasses =
                "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10";
            } else if (isSelected && !isCorrectChoice) {
              stateClasses = "border-red-500 bg-red-50 dark:bg-red-500/10";
            }
          } else if (isSelected) {
            stateClasses = "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10";
          }

          return (
            <button
              key={choice.id}
              type="button"
              disabled={revealed}
              onClick={() => onToggle(choice.id)}
              className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors disabled:cursor-default ${stateClasses}`}
            >
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border ${
                  isMulti ? "rounded" : "rounded-full"
                } ${
                  isSelected
                    ? "border-indigo-500 bg-indigo-500"
                    : "border-black/30 dark:border-white/30"
                }`}
              >
                {isSelected && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
              <span>{choice.text}</span>
            </button>
          );
        })}
      </div>

      {revealed && (
        <div
          className={`mt-5 rounded-lg border px-4 py-3 text-sm ${
            isCorrectOverall
              ? "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
              : "border-red-500/40 bg-red-50 dark:bg-red-500/10 text-red-800 dark:text-red-300"
          }`}
        >
          <p className="font-semibold mb-1">
            {isCorrectOverall ? "Correct" : "Not quite"}
          </p>
          <p className="text-black/80 dark:text-white/80">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
