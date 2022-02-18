import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import corruptionsAbi from "../contracts/corruptionsAbi.json";
import useChainData from "./useChainData";
import base64 from "base-64";

const CollectionContext = createContext();

const CORRUPTIONS_ADDRESS = process.env.NEXT_PUBLIC_CORRUPTIONS_ADDRESS;

export function CollectionContextProvider(props) {
  const { provider, connected } = useChainData();

  const [collection, setCollection] = useState({});
  const [contract, setContract] = useState();

  const initializeContracts = useCallback(async () => {
    try {
      return await new provider.eth.Contract(
        corruptionsAbi,
        CORRUPTIONS_ADDRESS
      );
    } catch (err) {
      alert("Error setting up the corruptions contract");
      console.log("Error details", err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  const loadPiece = useCallback(
    async (id) => {
      if (collection[id] || !contract) return;

      const tokenURI = await contract.methods.tokenURI(id).call();

      const json = base64.decode(tokenURI.substring(29));
      const result = JSON.parse(json);

      setCollection((collection) => ({ ...collection, [id]: result }));
    },
    [collection, contract]
  );

  useEffect(() => {
    if (!connected || Object.keys(collection).length > 0) return;

    (async function () {
      const corruptionsContract = await initializeContracts();
      setContract(corruptionsContract);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  const context = useMemo(
    () => ({
      collection,
      contract,
      actions: { loadPiece },
    }),
    [collection, loadPiece, contract]
  );

  return <CollectionContext.Provider value={context} {...props} />;
}

export default function useCollection() {
  const context = useContext(CollectionContext);

  if (!context) {
    throw new Error("Hook only callable under a CollectionContextProvider");
  }

  return context;
}
