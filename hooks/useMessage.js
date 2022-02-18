import { useEffect, useMemo, useState } from "react";
import useChainData from "./useChainData";
import useMessages from "./useMessages";

export default function useMessage({ hash, load = false }) {
  const { provider, connected } = useChainData();
  const {
    messages,
    actions: { setMessage },
  } = useMessages();

  const messageItem = useMemo(
    () => messages?.find((item) => item.hash === hash) ?? {},
    [hash, messages]
  );

  useEffect(() => {
    if (!load || !hash || !connected) return;

    async function getMessage() {
      try {
        const transaction = await provider.eth.getTransaction(hash);
        const block = await provider.eth.getBlock(transaction.blockNumber);

        const message =
          transaction.input.length > 10
            ? provider.eth.abi.decodeParameter(
                "string",
                `0x${transaction.input.slice(10)}`
              )
            : "[internal function]";

        setMessage({ message, hash, timestamp: block.timestamp });
      } catch (err) {
        console.log({ err, hash });
      }
    }

    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load]);

  return messageItem;
}
