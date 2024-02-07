import * as t from "https://deno.land/std/testing/asserts.ts";
import { Ango } from "./Ango.js";

Deno.test("simple", () => {
  t.assertEquals(Ango.encode("あいう"), "ぃぅぇ");
  t.assertEquals(Ango.decode("ぃぅぇ"), "あいう");
  t.assertEquals(Ango.encode("漢字"), "漣存");
  t.assertEquals(Ango.encode("12345"), "23456");
  t.assertEquals(Ango.encode("ん"), "ゔ");
  t.assertEquals(Ango.encode("ゔ"), "ゕ");
  t.assertEquals(Ango.encode("ゕ"), "ゖ");
  t.assertEquals(Ango.encode("ゖ"), "゗");
  t.assertEquals(Ango.decode("゗"), "ゖ");
});
Deno.test("nkey", () => {
  t.assertEquals(Ango.encode("あいう", 5), "ぇぉか");
  t.assertEquals(Ango.encode("漢字", 10), "漬孡");
  t.assertEquals(Ango.encode("12345", 20), "EFGHI");
});
