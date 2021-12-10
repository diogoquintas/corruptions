import styled from "@emotion/styled";
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  padding: 10px;
  margin: 10px;
  border: 1px solid currentColor;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  padding-bottom: 0;
`;

const Textarea = styled.textarea`
  height: 100px;
  width: 100%;
  resize: none;
  color: #b76f02;
`;

const Input = styled.input`
  width: 100%;
`;

function Encoder() {
  const [input, setInput] = useState("");

  return (
    <Section>
      <h1>Encode</h1>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the normal text"
      />
      <Textarea
        disabled
        value={input.replace(
          new RegExp(`[${allInverted}]`, "gi"),
          (m) => invertedChars[m.toUpperCase()]
        )}
      />
    </Section>
  );
}

function Decoder() {
  const [input, setInput] = useState("");

  return (
    <Section>
      <h1>Decode</h1>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the cipher"
      />
      <Textarea
        disabled
        value={input.replace(
          new RegExp(`[${allChars}]`, "gi"),
          (m) => chars[m.toUpperCase()]
        )}
      />
    </Section>
  );
}

export default function Cipher() {
  return (
    <Wrapper>
      <Encoder />
      <Decoder />
    </Wrapper>
  );
}
