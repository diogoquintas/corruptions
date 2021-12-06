import Head from "next/head";
import corruption from "../corruption";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Corruption(s*)</title>
      </Head>
      <main>
        <img
          style={{ marginTop: "10px" }}
          width="320"
          src={corruption}
          alt=""
        />
      </main>
    </div>
  );
}
