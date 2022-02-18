import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { TOTAL } from "./Collection";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0.5rem;
  left: 0.5rem;
  display: flex;
  display: flex;
`;

const Input = styled.input`
  background: transparent;
  color: black;
  outline: black;
  transition: background 300ms ease;
  border: 0;
  width: 1.2rem;

  &::placeholder {
    color: black;
  }

  ${({ focused }) =>
    focused &&
    css`
      background: var(--main-green);
      width: 6rem;
    `}
`;

const Button = styled.button`
  background: transparent;
  color: var(--main-green);
  border: 0;
  margin-left: 0.5rem;
`;

export default function Search({ onOpenPiece }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const timeout = useRef();
  const elementRef = useRef();

  const onBlur = () => {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setFocused(false), 500);
  };
  const search = () => {
    const id = Number(query.trim());

    if (isNaN(id) || id > TOTAL || id < 0) {
      alert("Invalid id");
    } else {
      onOpenPiece(id);
    }

    setFocused(false);
    setQuery("");
    document.activeElement.blur();
  };

  useEffect(() => {
    function handler(evt) {
      if (!focused || elementRef.current.contains(evt.target)) return;

      console.log("clicked");

      setFocused(false);
      setQuery("");
      evt.stopPropagation();
      evt.preventDefault();
    }

    document.addEventListener("click", handler, { capture: true });

    return () => {
      document.removeEventListener("click", handler, { capture: true });
    };
  }, [focused]);

  return (
    <Wrapper>
      <form
        ref={elementRef}
        onSubmit={(evt) => {
          evt.preventDefault();
          search();
        }}
      >
        <Input
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
          placeholder={!focused ? "🔎" : "Enter an id"}
          onFocus={() => {
            timeout.current && clearTimeout(timeout.current);
            setFocused(true);
          }}
          onBlur={onBlur}
          focused={focused}
        />
        {focused && <Button type="submit">Search</Button>}
      </form>
    </Wrapper>
  );
}
