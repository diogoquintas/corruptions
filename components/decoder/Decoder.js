import { useState } from "react";

const chars = {
  "/": "A",
  $: "B",
  "|": "C",
  8: "D",
  _: "E",
  "?": "F",
  "#": "G",
  "%": "H",
  "^": "I",
  "~": "J",
  ":": "K",
  Q: "L",
  W: "M",
  E: "N",
  R: "O",
  T: "P",
  Y: "Q",
  U: "R",
  I: "S",
  O: "T",
  P: "U",
  A: "V",
  S: "W",
  D: "X",
  F: "Y",
  G: "Z",
};

export default function Decoder() {
  const [input, setInput] = useState("");

  return (
    <section>
      <h1>Enter the cipher</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input.replace(/[/$|8__?#%^~:QWERTYUIOPASDFG]/g, (m) => chars[m])}</p>
    </section>
  );
}
