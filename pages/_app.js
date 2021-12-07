import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <div>
      <Head>
        <title>Corruption(s*)</title>
      </Head>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link href="/">
          <a
            style={{
              color: pathname === "/" ? "orangered" : "black",
              textDecoration: "none",
            }}
          >
            home
          </a>
        </Link>
        <Link href="/contracts">
          <a
            style={{
              color: pathname === "/contracts" ? "orangered" : "black",
              textDecoration: "none",
            }}
          >
            contracts
          </a>
        </Link>
        <Link href="/cipher">
          <a
            style={{
              color: pathname === "/cipher" ? "orangered" : "black",
              textDecoration: "none",
            }}
          >
            cipher
          </a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
