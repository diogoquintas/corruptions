import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import styled from "@emotion/styled";
import OpenSea from "./OpenSea";
import Discord from "./Discord";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: #0d1302;
  padding: 1rem;
`;

const A = styled.a`
  color: ${({ selected }) => (selected ? "currentColor" : "#B76F02")};
  text-decoration: none;
  cursor: pointer;
  margin: 0 auto;

  & > svg {
    color: #b76f02;
    width: 21px;
    height: 21px;
  }
`;

const FixedNav = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

export default function Navigation() {
  const { pathname } = useRouter();

  return (
    <>
      <Nav>
        <Link href="/" passHref>
          <A selected={pathname === "/"}>home</A>
        </Link>
        <Link href="/contracts" passHref>
          <A selected={pathname === "/contracts"}>contracts</A>
        </Link>
        <Link href="/cipher" passHref>
          <A selected={pathname === "/cipher"}>cipher</A>
        </Link>
        <Link href="/timeline" passHref>
          <A selected={pathname === "/timeline"}>timeline</A>
        </Link>
      </Nav>
      <FixedNav>
        <Link
          aria-label="Community discord"
          title="Community discord"
          href="https://discord.gg/MUegeTGwQa"
          passHref
        >
          <A target="_blank">
            <Discord />
          </A>
        </Link>
        <Link href="https://opensea.io/collection/corruption-s" passHref>
          <A aria-label="Collection" title="Collection" target="_blank">
            <OpenSea />
          </A>
        </Link>
      </FixedNav>
    </>
  );
}
