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

## 型を別ファイルに移す

Lesson40では、`Service`型を`src/types/service.ts`に移した。

```txt
src/types/service.ts
```

型定義は次のように書く。

```tsx
export type Service = {
  title: string;
  description: string;
  price: string;
};
```

`export type`を使うことで、他のファイルから`Service`型を読み込める。

## dataファイルで型を読み込む

`src/data/services.ts`では、`Service`型を`import type`で読み込む。

```tsx
import type { Service } from "@/types/service";
```

`import type`は、型だけを読み込むための書き方である。

実行時に使う値ではなく、TypeScriptの型チェックにだけ使う。

その上で、`services`配列に型を付ける。

```tsx
export const services: Service[] = [
  {
    title: "コーポレートサイト制作",
    description:
      "会社の強みや問い合わせ導線を整理して、信頼感のあるWebサイトに仕上げます。",
    price: "80万円から",
  },
];
```

これにより、`services`配列の各データは`Service`型に合っている必要がある。

例えば`price`を書き忘れると、TypeScriptがエラーとして教えてくれる。

## components・data・typesの役割

ここまでで、ファイルの役割は次のように分かれた。

```txt
src/components/service-card.tsx
カードUI

src/data/services.ts
サービスの表示データ

src/types/service.ts
サービスデータの型
```

役割を分けることで、コードの見通しがよくなる。

UIを直すなら`components`、表示内容を直すなら`data`、データの形を直すなら`types`を見る、という判断ができる。

## import/exportを整理する

Lesson41では、`import`と`export`の使い分けを整理した。

通常の`import`は、実行時に使う値を読み込むときに使う。

```tsx
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/services";
```

`ServiceCard`は画面に表示する関数コンポーネントである。

`services`は画面に表示する配列データである。

どちらも実行時に使う値なので、通常の`import`で読み込む。

一方、型だけを読み込むときは`import type`を使う。

```tsx
import type { Service } from "@/types/service";
```

`Service`はTypeScriptの型チェックに使うものであり、実行時に画面へ表示する値ではない。

そのため`import type`で読み込む。

## named exportとは

次のように名前を付けてexportする書き方をnamed exportと呼ぶ。

```tsx
export function ServiceCard() {}
```

```tsx
export const services = [];
```

named exportしたものは、import側で`{}`を使って読み込む。

```tsx
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/services";
```

今回の整理は次の通りである。

```txt
ServiceCard
値なので通常のimport

services
値なので通常のimport

Service
型なのでimport type
```

## HeaderとFooterを共通コンポーネントにする

Lesson42では、`page.tsx`に直接書いていたHeaderとFooterを`src/components`に切り出した。

```txt
src/components/header.tsx
src/components/footer.tsx
```

Headerはサイト上部の共通UIである。

```tsx
type HeaderProps = {
  studioName: string;
};

export function Header({ studioName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-lg font-bold">
          {studioName}
        </Link>
      </div>
    </header>
  );
}
```

Footerはサイト下部の共通UIである。

```tsx
type FooterProps = {
  studioName: string;
};

export function Footer({ studioName }: FooterProps) {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-zinc-950">{studioName}</p>
        <p>© 2026 {studioName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
```

`studioName`はpropsとして外から渡している。

```tsx
<Header studioName={studioName} />
<Footer studioName={studioName} />
```

こうすると、HeaderとFooterの中身を変更したいときは、それぞれのコンポーネントファイルを見ればよい。

## page.tsxの役割を小さくする

HeaderとFooterを切り出すことで、`page.tsx`はページ全体の構成に集中できる。

```txt
page.tsx
ページ全体の組み立て

header.tsx
サイト上部の共通UI

footer.tsx
サイト下部の共通UI
```

共通UIをコンポーネントにしておくと、今後ページが増えたときにも再利用しやすい。
