# Lesson 28: 型を別ファイルに切り出す

## 学んだこと

TypeScript の型は、ページファイルの中だけでなく、別ファイルに切り出して再利用できます。

今回は `/works` ページで使っていた `WorkStatus` と `Work` を、`src/types/work.ts` に移動しました。

```tsx
export type WorkStatus = "draft" | "published";

export type Work = {
  title: string;
  category: string;
  summary: string;
  status: WorkStatus;
  url?: string;
};
```

## `export type` とは

`export type` は、型を他のファイルから使えるようにする書き方です。

```tsx
export type Work = {
  title: string;
  category: string;
  summary: string;
};
```

`export` しておくことで、別のファイルから `Work` 型を読み込めます。

## `import type` とは

型だけを読み込むときは `import type` を使います。

```tsx
import type { Work } from "@/types/work";
```

`Work` は画面に表示する値ではなく、TypeScript がチェックするための型です。

そのため、実行時に必要な通常の import ではなく、型専用の `import type` として読み込めます。

## なぜ型を別ファイルに分けるのか

型を別ファイルに分けると、複数のページやコンポーネントで同じ型を使い回せます。

例えば、制作実績の一覧ページと詳細ページの両方で `Work` 型を使いたい場合、毎回同じ型を書く必要がありません。

```txt
src/types/work.ts
↓
src/app/works/page.tsx
src/app/works/[slug]/page.tsx
```

このように型の定義場所を1つにしておくと、後から項目を追加したいときも管理しやすくなります。

## 今回のポイント

```txt
export type
型を他のファイルから使えるようにする

import type
型だけを読み込む

型の切り出し
複数ファイルで同じデータ構造を安全に使い回すための整理
```

## まとめ

TypeScript の型は、実装が大きくなるほど再利用する場面が増えます。

最初はページ内に直接書いても問題ありませんが、複数のファイルで同じ型を使うようになったら、`src/types` のような場所に切り出すと管理しやすくなります。
