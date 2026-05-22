# Client ComponentとServer Componentの使い分け

## 今回学ぶこと

Next.js App Routerでは、コンポーネントをServer ComponentとClient Componentに分けて考える。

今回のポイントは、ページ全体をClient Componentにするのではなく、ブラウザ上の操作が必要な小さい部品だけをClient Componentにすることだ。

## Server Componentとは

Server Componentは、サーバー側で描画されるコンポーネントである。

Next.js App Routerでは、何も指定しないコンポーネントは基本的にServer Componentとして扱われる。

例えば、次のような静的な表示はServer Componentのままでよい。

```txt
見出し
文章
サービス一覧
制作実績一覧
静的なレイアウト
```

表示するだけのUIでは、ブラウザ上で状態を持つ必要がないためである。

## Client Componentとは

Client Componentは、ブラウザ上で動く処理を持つコンポーネントである。

ファイルの先頭に`"use client"`を書くことで、そのファイルをClient Componentとして扱える。

```tsx
"use client";
```

例えば、次のような処理がある場合はClient Componentにする。

```txt
useStateを使う
onClickを使う
onChangeを使う
onSubmitを使う
ブラウザ上の操作に反応する
```

今回の`ContactToggle`は、`useState`や`onChange`、`onSubmit`を使っているためClient Componentにした。

```tsx
"use client";

import { useState } from "react";
```

## page.tsx全体に"use client"を書かない理由

トップページの`page.tsx`には`"use client"`を書いていない。

理由は、ページ全体がブラウザ上の状態を持つ必要はないためである。

トップページの多くは、見出し、文章、サービス一覧、制作実績セクションなどの静的な表示である。

そのため、ページ全体はServer Componentのままにして、フォーム操作が必要な`ContactToggle`だけをClient Componentにしている。

```tsx
import { ContactToggle } from "./contact-toggle";
```

```tsx
<ContactToggle />
```

このように、必要な部品だけをClient Componentとして読み込む。

## 今回の構成

今回の構成は次の通りである。

```txt
src/app/page.tsx
ページ全体を組み立てるServer Component

src/app/contact-toggle.tsx
フォーム操作だけを担当するClient Component
```

`page.tsx`はページ全体の構成を担当する。

`contact-toggle.tsx`は、入力、送信、状態管理など、ユーザー操作に関わる部分だけを担当する。

## 判断基準

Client Componentにするかどうかは、次の基準で考える。

```txt
ユーザー操作に反応する必要がある
状態を持つ必要がある
ブラウザAPIを使う必要がある
```

このどれかに当てはまる場合はClient Componentを検討する。

逆に、ただ表示するだけならServer Componentのままでよい。

## まとめ

Next.js App Routerでは、必要な部分だけをClient Componentにすることが大切である。

今回の考え方は次の通りである。

```txt
ページ全体
Server Componentのまま

フォーム操作部分
Client Componentにする
```

`"use client"`は便利だが、ページ全体に何となく書くものではない。

`useState`やイベント処理が必要な小さい部品だけに書くことで、Server Componentの利点を残しながら、必要な部分だけをブラウザ上で動かせる。
