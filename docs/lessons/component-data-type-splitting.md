# Next.jsのファイル分割入門: components・data・typesを整理する

## 今回学ぶこと

Next.jsでページを作っていると、1つの`page.tsx`にコードが増えていく。

最初は1ファイルで書く方が分かりやすいが、コンポーネント、データ、型が混ざると読みにくくなる。

そこで、役割ごとにファイルを分ける。

```txt
src/components
UI部品を置く

src/data
表示用データを置く

src/types
型定義を置く
```

Lesson38では、`ServiceCard`を`src/components`に切り出した。

Lesson39では、`services`配列を`src/data/services.ts`に切り出した。

## コンポーネントを別ファイルに移す

もともと`ServiceCard`は`src/app/page.tsx`の中に書いていた。

```tsx
function ServiceCard({ title, description, price }: ServiceCardProps) {
  return (
    <article className="border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-600">{description}</p>
      <p className="mt-6 border-t border-zinc-200 pt-4 text-sm font-semibold text-zinc-950">
        {price}
      </p>
    </article>
  );
}
```

これを次のファイルに移した。

```txt
src/components/service-card.tsx
```

## exportで外から使えるようにする

別ファイルに移したコンポーネントは、他のファイルから読み込めるように`export`する。

```tsx
export function ServiceCard({ title, description, price }: ServiceCardProps) {
  return (
    <article className="border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-600">{description}</p>
      <p className="mt-6 border-t border-zinc-200 pt-4 text-sm font-semibold text-zinc-950">
        {price}
      </p>
    </article>
  );
}
```

`export`を付けることで、別ファイルから`ServiceCard`をimportできる。

## importで読み込む

`src/app/page.tsx`では、切り出した`ServiceCard`を読み込む。

```tsx
import { ServiceCard } from "@/components/service-card";
```

この`@/components/service-card`は、`src/components/service-card.tsx`を指している。

このプロジェクトでは`@/`が`src/`を表す設定になっているためである。

```txt
@/components/service-card
↓
src/components/service-card.tsx
```

## なぜ分けるのか

ファイルを分けると、`page.tsx`の役割が分かりやすくなる。

`page.tsx`は、ページ全体の構成を担当する。

`ServiceCard`は、サービスカード1枚の見た目を担当する。

```txt
page.tsx
ページ全体の構成

service-card.tsx
カードUIの部品
```

このように役割を分けることで、あとから修正する場所を見つけやすくなる。

## まとめ

コンポーネントは、UIの部品である。

何度も使うUIや、ページ本体から切り離した方が読みやすいUIは、`src/components`に分けるとよい。

今回の流れは次の通りである。

```txt
page.tsxにあったServiceCardを切り出す
↓
src/components/service-card.tsxを作る
↓
ServiceCardをexportする
↓
page.tsxでimportする
```

これが、Next.jsでコンポーネントを分割する基本の流れである。

## データを別ファイルに移す

`ServiceCard`を切り出したあと、サービス一覧のデータも`page.tsx`から分離した。

```txt
src/data/services.ts
```

このファイルには、サービス一覧として表示するデータを置く。

```tsx
type Service = {
  title: string;
  description: string;
  price: string;
};

export const services: Service[] = [
  {
    title: "コーポレートサイト制作",
    description:
      "会社の強みや問い合わせ導線を整理して、信頼感のあるWebサイトに仕上げます。",
    price: "80万円から",
  },
];
```

`export const services`と書くことで、他のファイルからサービスデータを読み込める。

## page.tsxでデータを読み込む

`page.tsx`では、`services`をimportして使う。

```tsx
import { services } from "@/data/services";
```

これにより、`page.tsx`からデータ定義が消え、ページ本体が読みやすくなった。

```txt
page.tsx
ページ全体の構成

service-card.tsx
カードUI

services.ts
サービスの表示データ
```

コンポーネントとデータを分けることで、UIを直したいときは`components`、表示内容を直したいときは`data`を見る、という判断がしやすくなる。
