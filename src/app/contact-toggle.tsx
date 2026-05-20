"use client";

import { useState } from "react";

export function ContactToggle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name) {
      alert("お名前を入力してください");
      return;
    }

    setIsOpen(true);
    setIsSubmitted(true);
  }

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <label className="block text-sm font-semibold text-zinc-200">
        お名前
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 block w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-white"
          placeholder="山田 太郎"
        />
      </label>
      {name && (
        <p className="mt-3 text-sm text-zinc-300">{name}さん、こんにちは。</p>
      )}
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center bg-white px-5 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
      >
        {isOpen ? "閉じる" : "詳細を見る"}
      </button>
      {isOpen && (
        <p className="mt-4 text-zinc-300">
          初回相談では、目的、必要なページ、公開希望時期を一緒に整理します。
        </p>
      )}
      {isSubmitted && (
        <p className="mt-4 bg-teal-900/40 p-4 text-sm text-teal-100">
          {name}さん、送信準備ができました。
        </p>
      )}
    </form>
  );
}
