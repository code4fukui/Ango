# Ango

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A minimal JavaScript library for implementing a Caesar cipher-style shift on Unicode code points. It's designed as a simple, educational tool for understanding basic cryptography concepts.

## Demo

- [Live Example](https://code4fukui.github.io/Ango/)

## Features

- **Simple API:** Provides straightforward `encode` and `decode` functions.
- **Unicode Support:** Correctly handles multi-byte characters, including Japanese (e.g., Hiragana, Kanji).
- **Customizable Key:** Allows for a custom numeric shift key (default is `1`).
- **No Dependencies:** A pure JavaScript module that works in browsers and Deno.
- **Browser Demo:** Includes a simple HTML interface to demonstrate functionality ([index.html](index.html)).

## Usage

Import the module directly from the repository URL.

```js
import { Ango } from "https://code4fukui.github.io/Ango/Ango.js";

// Encrypt Japanese text with a key of 3
const encrypted = Ango.encode("漢字", 3);
console.log(encrypted); // "渕弍"

// Decrypt the text with the same key
const decrypted = Ango.decode(encrypted, 3);
console.log(decrypted); // "漢字"

// Works on any string, including numbers and symbols
console.log(Ango.encode("abc 123", 10)); // "klm*<=>"
console.log(Ango.decode("klm*<=>", 10)); // "abc 123"
```

## API

### `Ango.encode(text, [key])`
- `text` `<string>`: The plaintext string to encode.
- `key` `<number>`: The numeric key to shift code points by. **Default:** `1`.
- **Returns** `<string>`: The encoded (ciphertext) string.

### `Ango.decode(text, [key])`
- `text` `<string>`: The ciphertext string to decode.
- `key` `<number>`: The numeric key used for encoding. **Default:** `1`.
- **Returns** `<string>`: The decoded (plaintext) string.

## License

[MIT](LICENSE) © 2024 Taisuke Fukuno