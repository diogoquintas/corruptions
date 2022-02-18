import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import dataChannelAbi from "../contracts/dataChannelAbi.json";
import useChainData from "./useChainData";

const MessagesContext = createContext();

const DATA_CHANNEL_ADDRESS = process.env.NEXT_PUBLIC_DATA_CHANNEL_ADDRESS;
const REFLECTIONS_DATA_CHANNEL_ADDRESS =
  process.env.NEXT_PUBLIC_REFLECTIONS_DATA_CHANNEL_ADDRESS;
const DATA_CHANNEL_DEPLOY_BLOCK = 13615636;
const REFLECTIONS_DATA_CHANNEL_DEPLOY_BLOCK = 13623404;

export function MessagesContextProvider(props) {
  const { provider, connected } = useChainData();

  const [messages, setMessages] = useState([]);
  const [sortAsc, setSortAsc] = useState(false);

  const initializeContracts = useCallback(async () => {
    try {
      const dataChannel = await new provider.eth.Contract(
        dataChannelAbi,
        DATA_CHANNEL_ADDRESS
      );

      const reflectionsDataChannel = await new provider.eth.Contract(
        dataChannelAbi,
        REFLECTIONS_DATA_CHANNEL_ADDRESS
      );

      return {
        dataChannel,
        reflectionsDataChannel,
      };
    } catch (err) {
      alert("Error setting up the data channel contracts");
      console.log("Error details", err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  const setMessage = useCallback(
    ({ hash, message, timestamp }) =>
      setMessages((messages) =>
        messages.map((item) =>
          item.hash === hash ? { ...item, message, timestamp } : item
        )
      ),
    []
  );

  const sortedMessages = useMemo(
    () =>
      messages.sort((a, b) =>
        sortAsc ? a.blockNumber - b.blockNumber : b.blockNumber - a.blockNumber
      ),
    [messages, sortAsc]
  );

  const toggleSort = useCallback(() => setSortAsc((sort) => !sort), []);

  useEffect(() => {
    if (!connected || messages.length > 0) return;

    (async function () {
      const { dataChannel, reflectionsDataChannel } =
        await initializeContracts();

      dataChannel.events
        .Message({ fromBlock: DATA_CHANNEL_DEPLOY_BLOCK })
        .on("data", (event) => {
          setMessages((messages) => [
            {
              blockNumber: event.blockNumber,
              hash: event.transactionHash,
              from: "CorruptionsDataChannel",
            },
            ...messages,
          ]);
        });

      reflectionsDataChannel.events
        .Message({ fromBlock: REFLECTIONS_DATA_CHANNEL_DEPLOY_BLOCK })
        .on("data", (event) => {
          setMessages((messages) => [
            {
              blockNumber: event.blockNumber,
              hash: event.transactionHash,
              from: "ReflectionsDataChannel",
            },
            ...messages,
          ]);
        });
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  const context = useMemo(
    () => ({
      messages: sortedMessages,
      sortAsc,
      actions: { setMessage, toggleSort },
    }),
    [setMessage, sortAsc, sortedMessages, toggleSort]
  );

  return <MessagesContext.Provider value={context} {...props} />;
}

export default function useMessages() {
  const context = useContext(MessagesContext);

  if (!context) {
    throw new Error("Hook only callable under a MessagesContextProvider");
  }

  return context;
}
