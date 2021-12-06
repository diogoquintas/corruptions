import Head from "next/head";
import ContractList from "../components/contract-list/ContractList";
import Decoder from "../components/decoder/Decoder";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Corruption(s*)</title>
      </Head>
      <main>
        <ContractList />
        <Decoder />
      </main>
    </div>
  );
}
