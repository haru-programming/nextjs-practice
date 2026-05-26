//"use client"は、クライアントページで操作がある最小のコンポーネントにつけるので、トップの静的に表示するページにはつけない

import Link from "next/link";
import { ContactToggle } from "./contact-toggle";
import { ServiceCard } from "@/components/service-card";

const studioName = "Studio Cloud";
const mainMessage = "事業の魅力が伝わるWebサイトを作ります。";

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
};

const services: ServiceCardProps[] = [
  {
    title: "コーポレートサイト制作",
    description:
      "会社の強みや問い合わせ導線を整理して、信頼感のあるWebサイトに仕上げます。",
    price: "80万円から",
  },
  {
    title: "LP制作",
    description:
      "広告やキャンペーンの目的に合わせて、申し込みにつながるページを作ります。",
    price: "35万円から",
  },
  {
    title: "運用改善",
    description:
      "公開後のアクセス解析や改善提案を行い、成果につながるWebサイトに育てます。",
    price: "月額12万円から",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-lg font-bold">
            {studioName}
          </Link>

          <nav className="hidden gap-6 text-sm font-medium text-zinc-600 sm:flex">
            <Link href="/services" className="hover:text-zinc-950">
              Service
            </Link>
            <a href="#contact" className="hover:text-zinc-950">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-700">
            Web production studio
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            {mainMessage}
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-zinc-600">
            ReactとNext.jsの練習として、制作会社のトップページを少しずつ作っていきます。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center bg-zinc-950 px-6 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              相談する
            </a>
            <a
              href="#service"
              className="inline-flex h-12 items-center justify-center border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-950 hover:border-zinc-950"
            >
              サービスを見る
            </a>
          </div>
        </div>
      </section>

      <section id="service" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-3xl font-bold">サービス</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section id="works" className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-3xl font-bold">制作実績</h2>
          <p className="mt-4 max-w-2xl leading-8 text-zinc-600">
            課題整理から公開後の改善まで、目的に合わせたWeb制作を行います。
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-5 py-16">
        <div className="bg-zinc-950 p-8 text-white">
          <h2 className="text-3xl font-bold">お問い合わせ</h2>
          <p className="mt-4 text-zinc-300">
            次のステップで、ここにボタンやフォームを追加します。
          </p>
          <ContactToggle />
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-zinc-950">{studioName}</p>
          <p>© 2026 {studioName}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
