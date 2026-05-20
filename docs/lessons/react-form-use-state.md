# React のフォーム入門: useState で入力・送信・バリデーションを扱う

## 今回学ぶこと

React のフォームでは、入力値を state として持ち、送信時に自分で処理を行います。

今回は次の流れを実装しました。

```txt
input の値を state に入れる
↓
form の送信を止める
↓
入力必須チェックをする
↓
送信後のメッセージを表示する
```

## input の値を state に入れる

まず、名前入力用の state を作りました。

```tsx
const [name, setName] = useState<string>("");
```

`name` は現在入力されている文字列です。

`setName` は、`name` を更新するための関数です。

input には `value` と `onChange` を設定しました。

```tsx
<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
```

`value={name}` は、input に React の state を表示する指定です。

`onChange` は、入力内容が変わるたびに実行されるイベントです。

`event.target.value` には、今 input に入力されている文字列が入っています。

```tsx
onChange={(event) => setName(event.target.value)}
```

このコードにより、入力するたびに `name` state が更新されます。

## 入力内容に応じて表示を変える

`name` があるときだけ、挨拶文を表示しました。

```tsx
{name && (
  <p className="mt-3 text-sm text-zinc-300">{name}さん、こんにちは。</p>
)}
```

これは「`name` が空ではないときだけ表示する」という意味です。

## form の送信を止める

HTML の `form` は、送信するとページを再読み込みしようとします。

React では、多くの場合この標準動作を止めて、自分で送信処理を書きます。

```tsx
function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
  event.preventDefault();
}
```

`event.preventDefault()` は、form の標準送信を止めるための処理です。

`event: React.SyntheticEvent<HTMLFormElement>` は、form で起きた React のイベントを受け取るための型です。

## onSubmit で送信処理を呼ぶ

form に `onSubmit` を設定しました。

```tsx
<form className="mt-6" onSubmit={handleSubmit}>
```

送信ボタンは `type="submit"` にします。

```tsx
<button type="submit">詳細を見る</button>
```

このボタンを押すと、form の `onSubmit` が実行され、`handleSubmit` が呼ばれます。

## 入力必須チェック

名前が空の場合は、送信処理を止めるようにしました。

```tsx
if (!name) {
  alert("お名前を入力してください");
  return;
}
```

`return` を書くことで、それ以降の処理を実行せずに関数を終了できます。

## 送信完了 UI を表示する

送信できたかどうかを管理する state を作りました。

```tsx
const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
```

送信に成功したら `true` にします。

```tsx
setIsSubmitted(true);
```

そして、`isSubmitted` が true のときだけメッセージを表示します。

```tsx
{isSubmitted && (
  <p className="mt-4 bg-teal-900/40 p-4 text-sm text-teal-100">
    {name}さん、送信準備ができました。
  </p>
)}
```

## まとめ

React のフォームでは、入力値や送信状態を state として管理します。

今回の流れは次の通りです。

```txt
useState で入力値を持つ
↓
value と onChange で input と state をつなぐ
↓
onSubmit で送信処理を実行する
↓
preventDefault でページ再読み込みを止める
↓
入力チェックをする
↓
送信完了メッセージを表示する
```

これが、React でフォームを扱う基本の流れです。
