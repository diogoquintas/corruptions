import { Base64 } from "js-base64";
import { useMemo, useRef, useState } from "react";
import useChainData from "../../hooks/useChainData";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useMessage from "../../hooks/useMessage";
import useMessages from "../../hooks/useMessages";
import {
  Section,
  MessageBlock,
  MessageContent,
  Pre,
  Img,
  From,
  List,
  MessageHeading,
  DateInfo,
  Select,
  Span,
} from "./DataChanel.styles";

const BASE_64_REGEX = /^[-A-Za-z0-9+/]*={0,3}$/;

function Message({ hash }) {
  const elementRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const { from, message, timestamp } = useMessage({ hash, load: isVisible });
  const { connected } = useChainData();

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

    const splitted = message.split(/([^ ]{10,})/);

    return splitted.map((string, index) => {
      const isBase64 =
        BASE_64_REGEX.test(string) &&
        Base64.isValid(string) &&
        string.length > 0;

      if (isBase64) {
        const parsed = Base64.decode(string);
        const hasInvalidCharacters = /[^\x00-\x7F]+/.test(parsed);

        if (/png/i.test(parsed)) {
          return (
            <Img key={index} src={`data:image/png;base64,${string}`} alt="" />
          );
        } else if (/svg/i.test(parsed)) {
          return (
            <div key={index} dangerouslySetInnerHTML={{ __html: parsed }} />
          );
        }

        if (hasInvalidCharacters || parsed.length === 0) return string;

        return (
          <Pre key={index}>
            {parsed
              .split(/(\n)/)
              .map((item, index) =>
                item === "\n" ? (
                  <br key={index} />
                ) : (
                  <span key={index}>{item}</span>
                )
              )}
          </Pre>
        );
      }

      return string;
    });
  }, [message]);

  return (
    <MessageBlock isCorruptionsDataChannel={from === "CorruptionsDataChannel"}>
      <MessageHeading>
        <From>{from}</From>
        {timestamp && (
          <DateInfo
            target="_blank"
            href={`https://etherscan.io/tx/${hash}`}
            rel="noreferrer"
          >
            {new Date(timestamp * 1000).toLocaleString()}
          </DateInfo>
        )}
      </MessageHeading>
      <MessageContent hasMessage={!!parsedMessage} ref={elementRef}>
        {parsedMessage ??
          `[this message is being loaded${
            connected ? "" : " - a connection is required"
          }]`}
      </MessageContent>
    </MessageBlock>
  );
}

export default function DataChannel() {
  const { connected } = useChainData();

  const {
    messages,
    sortAsc,
    actions: { toggleSort },
  } = useMessages();

  const sort = sortAsc ? "oldest" : "newest";

  return (
    <Section>
      <h3>Messages</h3>
      {messages.length > 0 && (
        <Select
          value={sort}
          onChange={(evt) => evt.target.value !== sort && toggleSort()}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </Select>
      )}
      {messages.length > 0 ? (
        <List>
          {messages.map(({ hash }) => (
            <Message key={hash} hash={hash} />
          ))}
        </List>
      ) : (
        <Span>
          [no messages found
          {`${connected ? "" : " - a connection is required"}`}]
        </Span>
      )}
    </Section>
  );
}
