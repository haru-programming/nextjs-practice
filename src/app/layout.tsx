import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio NEST | React Next Practice",
  description: "ReactとNext.jsを制作会社のWebサイト制作で学ぶ練習プロジェクトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
