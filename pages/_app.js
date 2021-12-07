import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link href="/">
          <a style={{ color: pathname === "/" ? "orangered" : "black" }}>
            home
          </a>
        </Link>
        <Link href="/contracts">
          <a
            style={{ color: pathname === "/contracts" ? "orangered" : "black" }}
          >
            contracts
          </a>
        </Link>
        <Link href="/cipher">
          <a style={{ color: pathname === "/cipher" ? "orangered" : "black" }}>
            cipher
          </a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
