import detectEthereumProvider from "@metamask/detect-provider";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Web3 from "web3";
import isMobileBrowser from "./isMobileBrowser";

const ChainContext = createContext();

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;

export function ChainContextProvider(props) {
  const [provider, setProvider] = useState();
  const [account, setAccount] = useState();
  const [connecting, setConnecting] = useState(false);

  const connected = !!provider && !!account;

  const setupProvider = useCallback(async () => {
    const provider = await detectEthereumProvider();
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

    return web3Provider;
  }, []);

  const initializeAccount = useCallback(async (web3Provider) => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            chainId: web3Provider.utils.toHex(CHAIN_ID),
          },
        ],
      });

      setAccount(accounts[0]);
    } catch (err) {
      alert("Please check your metamask");
      console.log("Error requesting accounts: ", err);
    }

    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length === 0) {
        alert("Error getting your account, please install metamask");
        console.log("Error on `accountsChanged`");
      } else {
        setAccount(accounts[0]);
      }
    });
  }, []);

  const handleEthereum = useCallback(async () => {
    try {
      const web3Provider = await setupProvider();

      await initializeAccount(web3Provider);
    } catch (err) {
      alert(
        "Error connecting to the chain, make sure you have Metamask installed"
      );
      console.log("Error details", err);
    }
  }, [initializeAccount, setupProvider]);

  const connect = useCallback(async () => {
    setConnecting(true);

    const provider = window.ethereum;

    if (provider) {
      await handleEthereum();

      setConnecting(false);
    } else {
      const timeout = setTimeout(async () => {
        if (window.ethereum) {
          await handleEthereum();
        } else if (isMobileBrowser()) {
          window
            .open(process.env.NEXT_PUBLIC_METAMASK_DEEP_LINK, "_blank")
            .focus();

          alert(
            "This application will redirect to Metamask, make sure you have it installed"
          );
          setConnecting(false);

          return;
        }

        setConnecting(false);
      }, 3000);

      const handleEthereumInitialized = async () => {
        if (timeout) {
          clearTimeout(timeout);
        }

        await handleEthereum();

        setConnecting(false);
      };

      window.addEventListener(
        "ethereum#initialized",
        handleEthereumInitialized,
        {
          once: true,
        }
      );
    }
  }, [handleEthereum]);

  const reset = useCallback(() => {
    setProvider(undefined);
    setAccount(undefined);
  }, []);

  const context = useMemo(
    () => ({
      provider,
      account,
      connected,
      connecting,
      actions: { connect, reset },
    }),
    [account, connect, connected, connecting, provider, reset]
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
