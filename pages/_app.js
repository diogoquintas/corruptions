import Head from "next/head";
import "../styles/fonts/fonts.css";
import "../styles/globals.css";
import Navigation from "../components/navigation/Navigation";
import styled from "@emotion/styled";
import Connecter from "../components/connecter/Connecter";
import { ChainContextProvider } from "../hooks/useChainData";
import BackToTop from "../components/back-to-top/BackToTop";
import { MessagesContextProvider } from "../hooks/useMessages";
import { CollectionContextProvider } from "../hooks/useCollection";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
  align-items: center;
  min-height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Corruption(s*)</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <ChainContextProvider>
        <MessagesContextProvider>
          <CollectionContextProvider>
            <Wrapper>
              <Navigation />
              <Main>
                <Component {...pageProps} />
              </Main>
              <Connecter />
            </Wrapper>
            <BackToTop />
          </CollectionContextProvider>
        </MessagesContextProvider>
      </ChainContextProvider>
    </div>
  );
}

export default MyApp;
