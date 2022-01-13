import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Web3 from "web3";
import dataChannelAbi from "../contracts/dataChannelAbi.json";
import isMobileBrowser from "./isMobileBrowser";

const ChainContext = createContext();

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;
const DATA_CHANNEL_ADDRESS = process.env.NEXT_PUBLIC_DATA_CHANNEL_ADDRESS;
const REFLECTIONS_DATA_CHANNEL_ADDRESS =
  process.env.NEXT_PUBLIC_REFLECTIONS_DATA_CHANNEL_ADDRESS;
const DATA_CHANNEL_DEPLOY_BLOCK = 13615636;
const REFLECTIONS_DATA_CHANNEL_DEPLOY_BLOCK = 13623404;

export function ChainContextProvider(props) {
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState();
  const [dataChannel, setDataChannel] = useState();
  const [reflectionsDataChannel, setReflectionsDataChannel] = useState();
  const [connecting, setConnecting] = useState(false);
  const [messages, setMessages] = useState([]);

  const connected =
    !!provider && !!account && !!dataChannel && !!reflectionsDataChannel;

  useEffect(() => {
    if (!connected) return;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  const connect = useCallback(async () => {
    if (isMobileBrowser()) {
      window.open(process.env.NEXT_PUBLIC_METAMASK_DEEP_LINK, "_blank").focus();
      return;
    }

    setConnecting(true);

    const provider = window.ethereum;

    if (!provider) {
      throw new Error(
        "No provider found, check if you have a wallet installed"
      );
    }

    try {
      await provider.enable();

      const web3Provider = new Web3(provider);

      setProvider(web3Provider);

      const isCorrectNetwork = window.ethereum.networkVersion === CHAIN_ID;

      if (!isCorrectNetwork) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: web3Provider.utils.toHex(CHAIN_ID),
            },
          ],
        });
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            chainId: web3Provider.utils.toHex(CHAIN_ID),
          },
        ],
      });

      setAccount(accounts[0]);

      const dataChannel = await new web3Provider.eth.Contract(
        dataChannelAbi,
        DATA_CHANNEL_ADDRESS
      );

      setDataChannel(dataChannel);

      const reflectionsDataChannel = await new web3Provider.eth.Contract(
        dataChannelAbi,
        REFLECTIONS_DATA_CHANNEL_ADDRESS
      );

      setReflectionsDataChannel(reflectionsDataChannel);
    } catch (err) {
      alert("It was not possible to connect to your wallet");
      console.log("Error details", err);
    }

    setConnecting(false);
  }, []);

  const setMessage = useCallback(
    ({ hash, message, timestamp }) =>
      setMessages((messages) =>
        messages.map((item) =>
          item.hash === hash ? { ...item, message, timestamp } : item
        )
      ),
    []
  );

  const reset = useCallback(() => {
    setProvider(undefined);
    setAccount(undefined);
    setDataChannel(undefined);
  }, []);

  const sortedMessages = useMemo(
    () => messages.sort((a, b) => b.blockNumber - a.blockNumber),
    [messages]
  );

  const context = useMemo(
    () => ({
      provider,
      account,
      connected,
      connecting,
      messages: sortedMessages,
      actions: { connect, reset, setMessage },
    }),
    [
      account,
      connect,
      connecting,
      provider,
      reset,
      sortedMessages,
      connected,
      setMessage,
    ]
  );

  return <ChainContext.Provider value={context} {...props} />;
}

export default function useChainData() {
  const context = useContext(ChainContext);

  if (!context) {
    throw new Error("Hook only callable under a ChainContextProvider");
  }

  return context;
}
