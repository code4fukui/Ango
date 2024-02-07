export const Ango = {
  encode: (s, nkey = 1) => {
    const res = [];
    for (const c of s) {
      res.push(String.fromCodePoint(c.codePointAt(0) + nkey));
    }
    return res.join("");
  },
  decode: (s, nkey = 1) => {
    const res = [];
    for (const c of s) {
      res.push(String.fromCodePoint(c.codePointAt(0) - nkey));
    }
    return res.join("");
  }
};
