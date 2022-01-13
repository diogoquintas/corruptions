import Head from "next/head";
import "../styles/globals.css";
import Navigation from "../components/navigation/Navigation";
import styled from "@emotion/styled";
import Connecter from "../components/connecter/Connecter";
import { ChainContextProvider } from "../hooks/useChainData";

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
      </Head>
      <ChainContextProvider>
        <Wrapper>
          <Navigation />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Connecter />
        </Wrapper>
      </ChainContextProvider>
    </div>
  );
}

export default MyApp;
