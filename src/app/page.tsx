import Link from "next/link";
import { ChevronRight, ListChecks } from "lucide-react";
import { getExams } from "@/lib/exams";

export default function Home() {
  const exams = getExams();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pt-10 pb-16 sm:pt-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Choose an exam to practice
        </h1>
        <p className="text-black/60 dark:text-white/60">
          Practice questions for Azure certification exams — with instant
          feedback in practice mode, or a timed exam simulation.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {exams.map((exam) => (
          <Link
            key={exam.slug}
            href={`/exams/${exam.slug}`}
            className="group rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md active:scale-[0.99]"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <h2 className="text-lg font-semibold group-hover:text-accent transition-colors">
                {exam.title}
              </h2>
              <span className="shrink-0 rounded-full bg-black/5 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-black/60 dark:text-white/60">
                {exam.code}
              </span>
            </div>
            <p className="text-sm text-black/60 dark:text-white/60 mb-3">
              {exam.description}
            </p>
            <p className="flex items-center gap-1.5 text-xs text-black/40 dark:text-white/40">
              <ListChecks size={14} strokeWidth={2} />
              {exam.questions.length} questions available
              <ChevronRight
                size={14}
                strokeWidth={2}
                className="ml-auto text-black/30 dark:text-white/30 transition-transform group-hover:translate-x-0.5"
              />
            </p>
          </Link>
        ))}
      </div>

      <p className="mt-12 text-xs text-black/40 dark:text-white/40">
        Not affiliated with or endorsed by Microsoft. For personal study use
        only — not for redistribution.
      </p>
    </main>
  );
}
