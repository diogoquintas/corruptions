import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  padding: 10px;
`;

const A = styled.a`
  color: ${({ selected }) => (selected ? "#B76F02" : "currentColor")};
  text-decoration: none;
  cursor: pointer;
`;

export default function Navigation() {
  const { pathname } = useRouter();

  return (
    <Nav>
      <Link href="/">
        <A selected={pathname === "/"}>home</A>
      </Link>
      <Link href="/contracts">
        <A selected={pathname === "/contracts"}>contracts</A>
      </Link>
      <Link href="/cipher">
        <A selected={pathname === "/cipher"}>cipher</A>
      </Link>
    </Nav>
  );
}
