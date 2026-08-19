import { notFound } from "next/navigation";
import { getExam, getExams } from "@/lib/exams";
import ExamRunner from "@/components/ExamRunner";

export function generateStaticParams() {
  return getExams().map((exam) => ({ slug: exam.slug }));
}

export default async function ExamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = getExam(slug);
  if (!exam) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pt-10 pb-16 sm:pt-16">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold tracking-tight">{exam.title}</h1>
          <span className="rounded-full bg-black/5 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-black/60 dark:text-white/60">
            {exam.code}
          </span>
        </div>
        <p className="text-black/60 dark:text-white/60">{exam.description}</p>
      </header>

      <ExamRunner exam={exam} />
    </main>
  );
}
