# Lesson 30: 型を使って実装ミスを防ぐ

## 学んだこと

`status` の型を union type で限定し、その値を使って表示するデータを絞り込みました。

```tsx
type WorkStatus = "draft" | "published";
```

この型により、`status` には `"draft"` か `"published"` だけを入れられます。

## 表示対象を filter で絞る

`works` 配列の中から、公開済みの実績だけを取り出しました。

```tsx
const publishedWorks = works.filter((work) => work.status === "published");
```

`filter` は、条件に合う要素だけを残した新しい配列を作るメソッドです。

今回の条件は:

```tsx
work.status === "published"
```

つまり「公開済みの実績だけを残す」という意味です。

## 表示には絞り込んだ配列を使う

もともとは `works` をそのまま表示していました。

```tsx
{works.map((work) => (
  <WorkCard key={work.title} {...work} />
))}
```

Lesson 30 では、公開済みだけを表示するために `publishedWorks` を使いました。

```tsx
{publishedWorks.map((work) => (
  <WorkCard key={work.title} {...work} />
))}
```

これにより、`status: "draft"` のデータは画面に表示されません。

## TypeScript が防いでくれること

`status` は `WorkStatus` 型で定義されています。

```tsx
type WorkStatus = "draft" | "published";
```

そのため、次のような値はエラーになります。

```tsx
status: "公開中"
```

使える値を限定しておくことで、実装中の表記ゆれや入力ミスを防ぎやすくなります。

## まとめ

型は「データの形を決める」だけでなく、UI に渡してよいデータを安全に絞り込むためにも使えます。

今回の流れは次の通りです。

```txt
status の値を union type で限定する
↓
filter で published だけ取り出す
↓
map で表示する
```

このように、TypeScript と配列操作を組み合わせると、表示条件を安全に管理できます。
