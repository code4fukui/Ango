# Ango

Unicodeコードポイントにシーザー暗号方式のシフトを実装するための最小限のJavaScriptライブラリです。基本的な暗号の概念を理解するためのシンプルな教育ツールとして設計されています。

## デモ

- [ライブデモ](https://code4fukui.github.io/Ango/)

## 機能

- **シンプルなAPI:** 直感的な `encode` および `decode` 関数を提供します。
- **Unicode対応:** マルチバイト文字（例: ひらがな、漢字）を正しく処理します。
- **カスタマイズ可能なキー:** 任意の数値のシフトキーを指定可能です（デフォルトは `1`）。
- **依存関係なし:** ブラウザおよびDenoで動作するピュアJavaScriptモジュールです。
- **ブラウザデモ:** 機能を試せるシンプルなHTMLインターフェースが付属しています（[index.html](index.html)）。

## 使い方

リポジトリのURLから直接モジュールをインポートします。

```js
import { Ango } from "https://code4fukui.github.io/Ango/Ango.js";

// キーを3にして日本語テキストを暗号化
const encrypted = Ango.encode("漢字", 3);
console.log(encrypted); // "渕弍"

// 同じキーでテキストを復号
const decrypted = Ango.decode(encrypted, 3);
console.log(decrypted); // "漢字"

// 数字や記号を含む任意の文字列で動作します
console.log(Ango.encode("abc 123", 10)); // "klm*<=>"
console.log(Ango.decode("klm*<=>", 10)); // "abc 123"
```

## API

### `Ango.encode(text, [key])`
- `text` `<string>`: 暗号化する平文の文字列。
- `key` `<number>`: コードポイントをシフトさせる数値キー。**デフォルト:** `1`
- **戻り値** `<string>`: 暗号化された文字列（暗号文）。

### `Ango.decode(text, [key])`
- `text` `<string>`: 復号する暗号文の文字列。
- `key` `<number>`: 暗号化に使用した数値キー。**デフォルト:** `1`
- **戻り値** `<string>`: 復号された文字列（平文）。

## ライセンス

[MIT](LICENSE) © 2024 Taisuke Fukuno
