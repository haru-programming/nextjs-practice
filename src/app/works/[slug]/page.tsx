import { notFound } from "next/navigation";
const allowedSlugs = ["sakura-dental", "north-table"];

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  if (!allowedSlugs.includes(slug)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-16 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-teal-700">Work detail</p>
        <h1 className="mt-4 text-4xl font-bold">{slug}</h1>
      </div>
    </main>
  );
}
