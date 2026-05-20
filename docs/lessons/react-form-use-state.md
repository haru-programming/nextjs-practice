# Reactのフォーム入門: useStateで入力・送信・バリデーションを扱う

## 今回学ぶこと

Reactのフォームでは、入力値をstateとして持ち、送信時に自分で処理を行う。

今回は次の流れを実装した。

```txt
input の値を state に入れる
↓
form の送信を止める
↓
入力必須チェックをする
↓
送信後のメッセージを表示する
```

## inputの値をstateに入れる

まず、名前入力用のstateを作った。

```tsx
const [name, setName] = useState<string>("");
```

`name`は現在入力されている文字列である。

`setName`は、`name`を更新するための関数である。

inputには`value`と`onChange`を設定した。

```tsx
<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
```

`value={name}`は、inputにReactのstateを表示する指定である。

`onChange`は、入力内容が変わるたびに実行されるイベントである。

`event.target.value`には、今inputに入力されている文字列が入っている。

```tsx
onChange={(event) => setName(event.target.value)}
```

このコードにより、入力するたびに`name`stateが更新される。

## 入力内容に応じて表示を変える

`name`があるときだけ、挨拶文を表示した。

```tsx
{name && (
  <p className="mt-3 text-sm text-zinc-300">{name}さん、こんにちは。</p>
)}
```

これは「`name`が空ではないときだけ表示する」という意味である。

## formの送信を止める

HTMLの`form`は、送信するとページを再読み込みしようとする。

Reactでは、多くの場合この標準動作を止めて、自分で送信処理を書く。

```tsx
function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
  event.preventDefault();
}
```

`event.preventDefault()`は、formの標準送信を止めるための処理である。

`event: React.SyntheticEvent<HTMLFormElement>`は、formで起きたReactのイベントを受け取るための型である。

## onSubmitで送信処理を呼ぶ

formに`onSubmit`を設定した。

```tsx
<form className="mt-6" onSubmit={handleSubmit}>
```

送信ボタンは`type="submit"`にする。

```tsx
<button type="submit">詳細を見る</button>
```

このボタンを押すと、formの`onSubmit`が実行され、`handleSubmit`が呼ばれる。

## 入力必須チェック

名前が空の場合は、送信処理を止めるようにした。

```tsx
if (!name) {
  alert("お名前を入力してください");
  return;
}
```

`return`を書くことで、それ以降の処理を実行せずに関数を終了できる。

## 送信完了UIを表示する

送信できたかどうかを管理するstateを作った。

```tsx
const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
```

送信に成功したら`true`にする。

```tsx
setIsSubmitted(true);
```

そして、`isSubmitted`がtrueのときだけメッセージを表示する。

```tsx
{isSubmitted && (
  <p className="mt-4 bg-teal-900/40 p-4 text-sm text-teal-100">
    {name}さん、送信準備ができました。
  </p>
)}
```

## まとめ

Reactのフォームでは、入力値や送信状態をstateとして管理する。

今回の流れは次の通りである。

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

これが、Reactでフォームを扱う基本の流れである。
