# Lesson 31: ボタンを押すと表示が変わる

## 学んだこと

React の `useState` を使って、ボタンを押すと表示が切り替わる UI を作りました。

Next.js App Router では、通常のページやコンポーネントは Server Component として扱われます。

`useState` や `onClick` のように、ブラウザ上で動く処理を使う場合は、そのファイルを Client Component にする必要があります。

## `"use client"` とは

ファイルの先頭に `"use client"` を書くと、そのファイルは Client Component として扱われます。

```tsx
"use client";
```

Client Component では、ユーザー操作や状態管理を扱えます。

例えば今回使ったものは、Client Component で必要になる処理です。

```tsx
useState(false)
onClick={() => ...}
```

## `useState` とは

`useState` は、React で「変わる値」を持つための機能です。

```tsx
const [isOpen, setIsOpen] = useState(false);
```

このコードは、次のように読みます。

```txt
isOpen
現在の状態

setIsOpen
状態を変更するための関数

false
最初の状態
```

今回は、`isOpen` が詳細文を開いているかどうかを表しています。

## 状態を切り替える

ボタンを押したときに、`isOpen` の値を反転させました。

```tsx
onClick={() => setIsOpen(!isOpen)}
```

`!isOpen` は、boolean の値を反転させる書き方です。

```txt
false -> true
true -> false
```

そのため、ボタンを押すたびに開く・閉じるが切り替わります。

## 表示を切り替える

ボタンの文字は、三項演算子で切り替えました。

```tsx
{isOpen ? "閉じる" : "詳細を見る"}
```

意味は:

```txt
isOpen が true なら「閉じる」
isOpen が false なら「詳細を見る」
```

詳細文は、`isOpen` が true のときだけ表示しました。

```tsx
{isOpen && (
  <p>初回相談では、目的、必要なページ、公開希望時期を一緒に整理します。</p>
)}
```

## まとめ

`useState` は、ユーザー操作で変わる画面の状態を React に覚えさせるための機能です。

今回の流れは次の通りです。

```txt
最初は isOpen が false
↓
詳細文は表示されない
↓
ボタンを押す
↓
setIsOpen で true に変わる
↓
React が再描画する
↓
詳細文が表示される
```

Next.js App Router では、`useState` を使う小さな部品だけを Client Component にすると、ページ全体を Server Component のまま保てます。
