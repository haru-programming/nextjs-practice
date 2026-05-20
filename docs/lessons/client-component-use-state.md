# Next.js App Router で useState を使う: use client と状態管理の基本

## 今回学ぶこと

Next.js App Router では、ページやコンポーネントは基本的に Server Component として扱われます。

しかし、ボタンをクリックして表示を切り替えるような UI では、ブラウザ上で状態を持つ必要があります。

そのようなときに使うのが、Client Component と `useState` です。

## Server Component と Client Component

Next.js App Router では、何も指定しないコンポーネントは基本的に Server Component です。

Server Component は、サーバー側で HTML を作るコンポーネントです。

一方で、次のような処理はブラウザ側で動く必要があります。

```tsx
onClick={() => ...}
```

```tsx
useState(...)
```

このように、ユーザー操作や状態管理を扱う場合は Client Component にします。

## `"use client"` とは

ファイルの先頭に `"use client"` を書くと、そのファイルは Client Component として扱われます。

```tsx
"use client";
```

今回作ったコンポーネントでは、`useState` と `onClick` を使うため、ファイルの先頭に `"use client"` を書きました。

```tsx
"use client";

import { useState } from "react";
```

`"use client"` は、コンポーネントの中でユーザー操作や state を扱うための合図です。

## `useState` とは

`useState` は、React で「変化する値」を持つための機能です。

今回の例では、詳細文を開いているかどうかを `isOpen` という state で管理しました。

```tsx
const [isOpen, setIsOpen] = useState<boolean>(false);
```

このコードは、次のように読みます。

```txt
isOpen
現在の状態

setIsOpen
状態を変更するための関数

useState<boolean>(false)
最初の値は false、型は boolean
```

## `setIsOpen` は自分で作る関数ではない

`setIsOpen` は、自分で定義した関数ではありません。

`useState` が自動で用意してくれる、state を更新するための関数です。

```tsx
const [isOpen, setIsOpen] = useState<boolean>(false);
```

`useState` は、2つの値を返します。

```txt
1つ目: 現在の値
2つ目: その値を変更する関数
```

名前は自由に付けられますが、React では次のような命名が一般的です。

```tsx
const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string>("");
const [isOpen, setIsOpen] = useState<boolean>(false);
```

`state名` と `setState名` の形にすると、読みやすくなります。

## `useState<boolean>` の意味

`useState<boolean>` は、この state が boolean 型であることを明示しています。

```tsx
const [isOpen, setIsOpen] = useState<boolean>(false);
```

つまり、`isOpen` には `true` または `false` だけが入ります。

```txt
true
false
```

今回のように初期値が `false` の場合、TypeScript は自動で boolean と推論できます。

そのため、実務では次のように書いても動きます。

```tsx
const [isOpen, setIsOpen] = useState(false);
```

ただし、学習中は `useState<boolean>` のように明示すると、state の型を意識しやすくなります。

## ボタンで状態を切り替える

ボタンを押したときに、`isOpen` の値を反転させました。

```tsx
onClick={() => setIsOpen(!isOpen)}
```

`!isOpen` は boolean の反転です。

```txt
false -> true
true -> false
```

そのため、ボタンを押すたびに開く・閉じるが切り替わります。

## 表示を切り替える

ボタンの文字は、`isOpen` の値によって切り替えています。

```tsx
{isOpen ? "閉じる" : "詳細を見る"}
```

これは三項演算子です。

```txt
isOpen が true なら「閉じる」
isOpen が false なら「詳細を見る」
```

詳細文は、`isOpen` が true のときだけ表示しています。

```tsx
{isOpen && (
  <p className="mt-4 text-zinc-300">
    初回相談では、目的、必要なページ、公開希望時期を一緒に整理します。
  </p>
)}
```

`&&` を使うと、条件が true のときだけ JSX を表示できます。

## ページ全体を Client Component にしない

今回、`useState` を使うのは `ContactToggle` だけです。

そのため、トップページ全体に `"use client"` を書くのではなく、`ContactToggle` だけを Client Component にしました。

```tsx
import { ContactToggle } from "./contact-toggle";
```

```tsx
<ContactToggle />
```

このように、ユーザー操作が必要な小さな部品だけを Client Component にすると、ページ全体は Server Component のまま保てます。

## まとめ

`useState` は、ユーザー操作で変わる値を React に覚えさせるための機能です。

今回の流れは次の通りです。

```txt
"use client" を書く
↓
useState で状態を作る
↓
ボタンを押す
↓
setIsOpen で状態を変える
↓
React が再描画する
↓
表示が切り替わる
```

Next.js App Router では、`useState` や `onClick` を使うコンポーネントには `"use client"` が必要です。

ただし、ページ全体を Client Component にするのではなく、必要な小さな部品だけを Client Component にするのが基本です。
