import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0;
`;

export const MessageContent = styled.div`
  margin-top: 0.2rem;
  word-spacing: 0.2rem;
  line-height: 1.4;

  ${({ hasMessage }) =>
    !hasMessage &&
    css`
      min-height: 6rem;
      text-shadow: -0.06em 0 red, 0.06em 0 cyan;
    `}
`;

export const From = styled.span`
  font-size: 0.8rem;
  white-space: nowrap;
`;

export const List = styled.ul`
  margin: 0;
  padding: 1rem;
  max-width: calc(100vw - 2rem);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const MessageBlock = styled.li`
  margin: 0;
  padding: 0;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  word-break: break-word;
  color: var(--main-green);

  ${({ isCorruptionsDataChannel }) =>
    !isCorruptionsDataChannel &&
    css`
      color: var(--inverted);
    `};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Pre = styled.pre`
  color: currentColor;
  font-weight: bold;
  white-space: normal;
  word-break: break-word;
  padding: 0.2rem;
  margin: 0;
  border-left: 0.3rem solid currentColor;
`;

export const Img = styled.img`
  padding: 0.5rem;
  width: calc(100% - 1rem);
`;

export const MessageHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateInfo = styled.a`
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
  color: currentColor;
  text-align: end;

  &:hover {
    filter: brightness(1.8);
    color: currentColor;
  }
`;

export const Select = styled.select`
  background: none;
  border: 0;
  color: var(--main-green);
  margin-left: auto;
  position: sticky;
  top: 2rem;
  background: var(--default-background);
`;

export const Span = styled.span`
  text-align: center;
`;
