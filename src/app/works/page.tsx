import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "制作実績 | Studio Cloud",
  description: "Studio Cloud の制作実績を紹介します。",
};
import type { Work } from "@/types/work";

const works: Work[] = [
  {
    title: "Sakura Dental Clinic",
    category: "Webサイトリニューアル",
    summary:
      "予約導線を見直し、スマートフォンからの問い合わせ率改善を目指した事例です。",
    status: "published",
    url: "https://example.com",
  },
  {
    title: "North Table",
    category: "レストランLP",
    summary:
      "季節メニューの魅力を伝える、広告用ランディングページの制作事例です。",
    status: "published",
  },
];

function WorkCard({ title, category, summary, url }: Work) {
  return (
    <article className="border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-teal-700">{category}</p>
      <h2 className="mt-3 text-2xl font-bold">{title}</h2>
      <p className="mt-4 leading-7 text-zinc-600">{summary}</p>
      {url && (
        <a
          href={url}
          className="mt-6 inline-flex text-sm font-semibold text-zinc-950 hover:text-teal-700"
        >
          サイトを見る
        </a>
      )}
    </article>
  );
}

export default function WorksPage() {
  const publishedWorks = works.filter((work) => work.status === "published");

  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-16 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">制作実績</h1>
        <p className="mt-4 leading-8 text-zinc-600">
          Studio Cloud の制作実績を紹介します。
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {publishedWorks.map((work) => (
            <WorkCard key={work.title} {...work} />
          ))}
        </div>
      </div>
    </main>
  );
}
