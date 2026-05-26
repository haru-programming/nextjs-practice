# React / Next.js 学習計画

このプロジェクトは、制作会社の現場で React と Next.js の案件を担当できるようになるための練習用プロジェクトです。

最終成果物は、架空の制作会社「Studio Cloud」のコーポレートサイトです。完成品を一気に作るのではなく、毎回小さな実装を自分で書きながら、React、Next.js、TypeScript、Tailwind CSS、フォーム、ルーティング、データ設計、納品前チェックまで順番に学びます。

## 進行ルール

1. 先生役の Codex は、先に完成形を全部書かない。
2. まず小さな課題を出し、学習者が自分でコードを書く。
3. 学習者が「できた」と言ったら、Codex がコードを確認する。
4. 確認時は `npm run lint` を実行し、必要に応じてエラーの読み方を説明する。
5. 新しい概念は、必ず既存コードの中で使ってから説明する。
6. React と TypeScript はセットで説明する。
7. Tailwind CSS は、見た目を作るための道具として少しずつ説明する。
8. 次のレッスンに進む前に、この `PLAN.md` の現在位置を確認する。
9. レッスンが進んだら、必要に応じて「現在の進捗」を更新する。
10. 分からない箇所が出たら、先に戻って復習する。無理に先へ進まない。
11. ブログアウトプット用の Markdown は、細かいレッスンごとではなく記事としてまとまりのよい単位で `docs/lessons/` に作成する。
12. 各レッスン完了時は、検証後に変更を commit し、remote が設定されている場合は push する。
13. ブログアウトプット用 Markdown は、だ・である調で書く。コードブロック外では、英字と日本語の間に半角スペースを入れない。

## ブログアウトプット単位

- Lesson 31〜32: `use client` と `useState` の基本
- Lesson 33〜36: React のフォーム入門
- Lesson 37: Client Component と Server Component の使い分け
- Lesson 38〜42: `components` / `data` / `types` のファイル分割
- Lesson 43〜49: 納品前チェック

## 現在の進捗

- [x] Next.js プロジェクト作成
- [x] Volta / Node.js 環境確認
- [x] 初期トップページを学習用ページに変更
- [x] JSX 内で変数を表示する
- [x] サービスカードを手書きで複製する
- [x] `ServiceCard` コンポーネントを作る
- [x] props を使ってカード内容を差し替える
- [x] TypeScript で props の型を書く
- [x] `type ServiceCardProps` に型を切り出す
- [x] `price` props を追加する
- [x] あえて props 不足エラーを出して TypeScript のエラーを読む
- [x] `services` 配列を作る
- [x] `map` で `services` 配列からカードを表示する

## フェーズ 1: React の基本を制作ページで覚える

目的: React の「部品を作って、データを渡して、繰り返し表示する」感覚を身につける。

作るもの: トップページの Hero、Service、Contact セクション。

学ぶこと:

- JSX
- コンポーネント
- props
- TypeScript の基本型
- `type` による props 型定義
- 配列
- `map`
- `key`
- Tailwind CSS の基本クラス

レッスン:

- [x] Lesson 1: 変数を JSX に表示する
- [x] Lesson 2: 同じカードを手書きで2つ作る
- [x] Lesson 3: `ServiceCard` コンポーネントに切り出す
- [x] Lesson 4: props で `title` と `description` を渡す
- [x] Lesson 5: `type ServiceCardProps` を作る
- [x] Lesson 6: `price` を追加して型エラーを体験する
- [x] Lesson 7: `services.map(...)` でカードを表示する
- [x] Lesson 8: `{...service}` の省略記法を覚える
- [x] Lesson 9: 3つ目のサービスを配列に追加する
- [x] Lesson 10: グリッドレイアウトでカードを横並びにする

完了条件:

- `ServiceCard` を自分で説明できる。
- props が何か説明できる。
- `type` が何のためにあるか説明できる。
- `map` で配列を表示できる。
- `npm run lint` が通る。

## フェーズ 2: UI を実案件らしく整える

目的: 制作会社のトップページとして見られる品質までレイアウトを整える。

作るもの:

- Header
- Hero
- Service
- Works
- Contact CTA
- Footer

学ぶこと:

- セクション設計
- レスポンシブ対応
- 余白設計
- 色とタイポグラフィ
- リンクとアンカー
- `next/link`
- 画像や装飾要素の扱い

レッスン:

- [x] Lesson 11: Header を読みやすく整える
- [x] Lesson 12: Hero の文章とボタンを作る
- [x] Lesson 13: Tailwind の余白、幅、色を読む
- [x] Lesson 14: Service カードを3カラムにする
- [x] Lesson 15: Works セクションを追加する
- [x] Lesson 16: Footer を追加する
- [x] Lesson 17: モバイル表示を整える

完了条件:

- 画面を見ながら Tailwind の主要クラスを読める。
- PC とスマホで破綻しないレイアウトにできる。
- Header / Footer / Card の役割を説明できる。

## フェーズ 3: Next.js App Router の基本

目的: ページを増やし、Next.js のルーティングを理解する。

作るもの:

- `/`
- `/services`
- `/works`
- `/works/[slug]`
- `/contact`

学ぶこと:

- `app` ディレクトリ
- `page.tsx`
- `layout.tsx`
- ルーティング
- `next/link`
- Dynamic Routes
- `notFound`
- Metadata

レッスン:

- [x] Lesson 18: `/services` ページを作る
- [x] Lesson 19: Header のリンクをページ遷移に変える
- [x] Lesson 20: `/works` ページを作る
- [x] Lesson 21: `works` 配列を作る
- [x] Lesson 22: `WorkCard` で実績一覧を表示する
- [x] Lesson 23: `/works/[slug]` の詳細ページを作る
- [x] Lesson 24: 存在しない slug で 404 を出す
- [x] Lesson 25: ページごとに metadata を設定する

完了条件:

- URL とファイル構造の関係を説明できる。
- 一覧ページと詳細ページを作れる。
- `params` の型を読める。

## フェーズ 4: TypeScript を現場レベルに近づける

目的: 型を「エラーを減らす設計道具」として使えるようにする。

学ぶこと:

- `string`, `number`, `boolean`
- 配列の型
- オブジェクトの型
- optional property
- union type
- `type` と `interface`
- 型の再利用
- 関数の引数と戻り値
- `React.ReactNode`

レッスン:

- [ ] Lesson 25: `Service` 型と `Work` 型を作る
- [x] Lesson 26: `status: "draft" | "published"` を使う
- [x] Lesson 27: optional な項目を作る
- [x] Lesson 28: props 型を別ファイルに切り出す
- [x] Lesson 29: 型エラーを3種類読む
- [x] Lesson 30: 型を使って実装ミスを防ぐ

完了条件:

- props 型を自分で書ける。
- 配列データに型をつけられる。
- TypeScript のエラーを怖がらずに読める。

## フェーズ 5: Client Components とフォーム

目的: ユーザー操作に反応する UI を作る。

作るもの:

- お問い合わせフォーム
- 入力中の状態表示
- 簡単なバリデーション
- 送信完了メッセージ

学ぶこと:

- `"use client"`
- `useState`
- event handler
- input / textarea
- controlled component
- form submit
- バリデーション
- Client Components と Server Components の違い

レッスン:

- [x] Lesson 31: ボタンを押すと表示が変わる
- [x] Lesson 32: `useState` に型をつける
- [x] Lesson 33: input の値を state に入れる
- [x] Lesson 34: form の送信を止める
- [x] Lesson 35: 入力必須チェックを作る
- [x] Lesson 36: 送信完了 UI を表示する
- [x] Lesson 37: Client Component にする範囲を考える

完了条件:

- `useState` の基本が分かる。
- 入力フォームを自分で作れる。
- Server Component と Client Component の違いを説明できる。

## フェーズ 6: データ設計とファイル分割

目的: 小さな1ファイル実装から、保守しやすい構成へ移行する。

作るもの:

- `src/components`
- `src/data`
- `src/types`

学ぶこと:

- コンポーネント分割
- data ファイル
- type ファイル
- import / export
- default export / named export
- ディレクトリ設計

レッスン:

- [x] Lesson 38: `ServiceCard` を別ファイルに移す
- [x] Lesson 39: `services` を `src/data/services.ts` に移す
- [x] Lesson 40: 型を `src/types` に移す
- [ ] Lesson 41: import / export を整理する
- [ ] Lesson 42: Header と Footer を共通化する

完了条件:

- ファイルを分けても迷子にならない。
- import / export の基本を説明できる。
- コンポーネント、データ、型を分けられる。

## フェーズ 7: 品質チェックと納品前作業

目的: 制作会社の案件として最低限必要な品質確認を身につける。

学ぶこと:

- lint
- build
- レスポンシブ確認
- アクセシビリティ基礎
- SEO metadata
- OGP
- favicon
- README 更新

レッスン:

- [ ] Lesson 43: `npm run lint` を読む
- [ ] Lesson 44: `npm run build` を通す
- [ ] Lesson 45: title / description を設定する
- [ ] Lesson 46: OGP 情報を設定する
- [ ] Lesson 47: 404 ページを作る
- [ ] Lesson 48: README に起動方法を書く
- [ ] Lesson 49: 最終チェックリストを作る

完了条件:

- lint と build が通る。
- 基本的な SEO 設定がある。
- PC / スマホ表示が崩れていない。
- 第三者が README を見て起動できる。

## フェーズ 8: 発展課題

目的: 実案件に近い追加要件に対応する。

候補:

- microCMS などの CMS 連携
- Server Actions
- 問い合わせ送信 API
- お知らせ機能
- 画像最適化
- アニメーション
- Vercel デプロイ
- GitHub Actions

このフェーズは、フェーズ 1 から 7 が完了してから着手する。

## 毎回のレッスンの流れ

1. 前回の到達点を確認する。
2. 今日の学習テーマを1つだけ決める。
3. Codex が最小の見本を提示する。
4. 学習者が手でコードを書く。
5. Codex がコードを確認する。
6. エラーがあれば一緒に読む。
7. `npm run lint` を通す。
8. 今日覚えたことを短く整理する。
9. `PLAN.md` の進捗を必要に応じて更新する。

## 現在の次の課題

次は Lesson 41 です。

目的: import/exportを整理し、named exportとimport typeの使い分けを復習する。

書くコード:

```tsx
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/services";
import type { Service } from "@/types/service";
```

理解すること:

- 値を読み込むときは通常の`import`を使う。
- 型だけを読み込むときは`import type`を使う。
- `export function`や`export const`はnamed exportである。
