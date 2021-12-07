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

const invertedChars = Object.entries(chars).reduce((acc, [key, value]) => {
  acc[value] = key;

  return acc;
}, {});

const allChars = Object.keys(chars).join("");
const allInverted = Object.keys(invertedChars).join("");

function Encoder() {
  const [input, setInput] = useState("");

  return (
    <section>
      <h1>Enter the normal text</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <pre>
        {input.replace(new RegExp(`[${allInverted}]`, "gi"), (m) => {
          console.log(m);
          return invertedChars[m.toUpperCase()];
        })}
      </pre>
    </section>
  );
}

function Decoder() {
  const [input, setInput] = useState("");

  return (
    <section>
      <h1>Enter the cipher</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <pre>
        {input.replace(
          new RegExp(`[${allChars}]`, "gi"),
          (m) => chars[m.toUpperCase()]
        )}
      </pre>
    </section>
  );
}

export default function Cipher() {
  return (
    <>
      <Encoder />
      <hr />
      <Decoder />
    </>
  );
}
