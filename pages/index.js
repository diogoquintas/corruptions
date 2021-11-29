import Head from "next/head";
import ContractItem from "../components/contract-item/ContractItem";
import ContractList from "../components/contract-list/ContractList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Corruption(*s)</title>
      </Head>
      <main>
        <ContractList />
      </main>
    </div>
  );
}
