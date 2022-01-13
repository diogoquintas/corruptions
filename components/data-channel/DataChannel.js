import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Base64 } from "js-base64";
import { useMemo, useRef, useState } from "react";
import useChainData from "../../hooks/useChainData";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useMessage from "../../hooks/useMessage";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageContent = styled.div`
  margin: 0;

  ${({ hasMessage }) =>
    !hasMessage &&
    css`
      min-height: 6rem;
    `}
`;

const From = styled.b`
  font-size: 0.8rem;
  color: ${({ isCorruptionsDataChannel }) =>
    isCorruptionsDataChannel ? "#B76F02" : "#B70284"};
`;

const List = styled.ul`
  margin: 0;
  padding: 1rem;
  max-width: calc(100vw - 2rem);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MessageBlock = styled.li`
  margin: 0;
  padding: 0;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-size: 1rem;
  word-break: break-word;
`;

const Pre = styled.pre`
  color: #61e721;
  white-space: normal;
  word-break: break-word;
  padding: 0.5rem;
  margin: 0;
`;

const Img = styled.img`
  padding: 0.5rem;
  width: calc(100% - 1rem);
`;

const MessageHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateInfo = styled.a`
  font-size: 0.7rem;
  color: #40a500;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #52ff00;
  }
`;

const BASE_64_REGEX =
  /^(?:[A-Za-z\d+/]{4})*(?:[A-Za-z\d+/]{3}=|[A-Za-z\d+/]{2}==)?$/;

function Message({ hash }) {
  const elementRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const { from, message, timestamp } = useMessage({ hash, load: isVisible });

  useIntersectionObserver({
    target: elementRef,
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    onIntersect: ([{ isIntersecting }], observer) => {
      if (isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
  });

  const parsedMessage = useMemo(() => {
    if (!message) return;

    const splitted = message.split(/([^ ]{20,})/);

    return splitted.map((string, index) => {
      const isBase64 = BASE_64_REGEX.test(string) && Base64.isValid(string);

      if (isBase64) {
        const parsed = Base64.decode(string);

        if (/png/i.test(parsed)) {
          return (
            <Img key={index} src={`data:image/png;base64,${string}`} alt="" />
          );
        } else if (/svg/i.test(parsed)) {
          return (
            <div key={index} dangerouslySetInnerHTML={{ __html: parsed }} />
          );
        }

        return <Pre key={index}>{parsed}</Pre>;
      }

      return string;
    });
  }, [message]);

  return (
    <MessageBlock>
      <MessageHeading>
        <From isCorruptionsDataChannel={from === "CorruptionsDataChannel"}>
          {from}
        </From>
        {timestamp && (
          <DateInfo target="_blank" href={`https://etherscan.io/tx/${hash}`}>
            {new Date(timestamp * 1000).toLocaleString()}
          </DateInfo>
        )}
      </MessageHeading>
      <MessageContent hasMessage={!!parsedMessage} ref={elementRef}>
        {parsedMessage ?? "[this message is being loaded]"}
      </MessageContent>
    </MessageBlock>
  );
}

export default function DataChannel() {
  const { connected, messages } = useChainData();

  return (
    <Section>
      <h3>Messages</h3>
      {connected ? (
        messages.length > 0 ? (
          <List>
            {messages.map(({ hash, from }) => (
              <Message key={hash} hash={hash} />
            ))}
          </List>
        ) : (
          <span>[no messages found]</span>
        )
      ) : (
        <span>[connection required to see messages]</span>
      )}
    </Section>
  );
}
