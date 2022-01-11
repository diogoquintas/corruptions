import styled from "@emotion/styled";
import { useRef, useEffect } from "react";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: black;
  mix-blend-mode: multiply;
  pointer-events: none;
`;

const RADIUS = 150;

const MouseElement = styled.div`
  position: absolute;
  top: -${RADIUS * 2}px;
  left: -${RADIUS * 2}px;
  width: ${RADIUS * 2}px;
  height: ${RADIUS * 2}px;
  z-index: 1;
  border-radius: 50%;
  background: white;
  pointer-events: none;
  filter: blur(20px);
`;

export default function MouseEffect() {
  const elementRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!elementRef.current) return;

      elementRef.current.style.top = `${event.clientY - RADIUS}px`;
      elementRef.current.style.left = `${event.clientX - RADIUS}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Wrapper>
      <MouseElement ref={elementRef} />
    </Wrapper>
  );
}
