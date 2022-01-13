import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Button = styled.button`
  position: fixed;
  right: 0.5rem;
  bottom: 2.5rem;
  background: none;
  border: none;
  color: var(--main-green);
  cursor: pointer;
  background-color: var(--default-background);
`;

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 1000);
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      [beam me up]
    </Button>
  );
}
