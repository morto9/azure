import Link from "next/link";
import { getExams } from "@/lib/exams";

export default function Home() {
  const exams = getExams();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Azure Certification Practice
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
            className="group rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-white/5 p-6 shadow-sm transition-colors hover:border-indigo-400 dark:hover:border-indigo-400"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <h2 className="text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {exam.title}
              </h2>
              <span className="shrink-0 rounded-full bg-black/5 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-black/60 dark:text-white/60">
                {exam.code}
              </span>
            </div>
            <p className="text-sm text-black/60 dark:text-white/60 mb-3">
              {exam.description}
            </p>
            <p className="text-xs text-black/40 dark:text-white/40">
              {exam.questions.length} questions available
            </p>
          </Link>
        ))}
      </div>

      <p className="mt-12 text-xs text-black/40 dark:text-white/40">
        Not affiliated with or endorsed by Microsoft. Practice questions are
        for study purposes and are not real exam questions.
      </p>
    </main>
  );
}
