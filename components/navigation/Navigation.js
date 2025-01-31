import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import styled from "@emotion/styled";
import OpenSea from "./OpenSea";
import Discord from "./Discord";
import { useState } from "react";

const Button = styled.button`
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  color: var(--default-background);
  background: var(--main-green);
  border: 0;
  z-index: 900;
  cursor: pointer;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 800;
  background: #020a13;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const A = styled.a`
  color: ${({ selected }) =>
    selected ? "currentColor" : "var(--selection-brown)"};
  text-decoration: none;
  cursor: pointer;

  & > svg {
    color: var(--main-green);
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
  z-index: 900;
`;

export default function Navigation() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}
      </Button>
      {isOpen && (
        <Nav>
          <Link href="/about" passHref>
            <A
              onClick={() => setIsOpen(false)}
              selected={pathname === "/about"}
            >
              About the project
            </A>
          </Link>
          <Link href="/collection" passHref>
            <A
              onClick={() => setIsOpen(false)}
              selected={pathname === "/collection"}
            >
              Collection
            </A>
          </Link>
          <Link href="/messages" passHref>
            <A
              onClick={() => setIsOpen(false)}
              selected={pathname === "/messages"}
            >
              Messages
            </A>
          </Link>
          <Link href="/timeline" passHref>
            <A
              onClick={() => setIsOpen(false)}
              selected={pathname === "/timeline"}
            >
              Timeline
            </A>
          </Link>
          <Link href="/contracts" passHref>
            <A
              onClick={() => setIsOpen(false)}
              selected={pathname === "/contracts"}
            >
              Contracts
            </A>
          </Link>
          <Link href="/cipher" passHref>
            <A
              onClick={() => setIsOpen(false)}
              selected={pathname === "/cipher"}
            >
              Cipher
            </A>
          </Link>
          <Link href="/faq" passHref>
            <A onClick={() => setIsOpen(false)} selected={pathname === "/faq"}>
              FAQ
            </A>
          </Link>
        </Nav>
      )}
      <FixedNav>
        <Link
          aria-label="Community discord"
          title="Community discord"
          href="https://discord.gg/MUegeTGwQa"
          passHref
        >
          <A target="_blank" rel="noreferrer">
            <Discord />
          </A>
        </Link>
        <Link href="https://opensea.io/collection/corruption-s" passHref>
          <A
            aria-label="Collection"
            title="Collection"
            target="_blank"
            rel="noreferrer"
          >
            <OpenSea />
          </A>
        </Link>
      </FixedNav>
    </>
  );
}
