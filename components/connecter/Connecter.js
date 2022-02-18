import styled from "@emotion/styled";
import useChainData from "../../hooks/useChainData";

const Wrapper = styled.div`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 900;
`;

const Button = styled.button`
  color: var(--main-green);
  background: var(--default-background);
  border: 0;
  cursor: pointer;

  &:hover:disabled {
    background-color: var(--default-background);
    cursor: not-allowed;
    color: var(--main-green);
  }

  &:disabled {
    font-size: 0.8rem;
  }
`;

const LogoutButton = styled.button`
  color: var(--main-green);
  background: var(--default-background);
  border: 0;
  cursor: pointer;

  &:hover {
    color: var(--main-green);
    background: var(--default-background);
    text-decoration: line-through;
  }
`;

export default function Connecter() {
  const {
    account,
    connected,
    connecting,
    actions: { connect, reset },
  } = useChainData();

  return (
    <Wrapper>
      {connected ? (
        <LogoutButton
          onClick={reset}
          aria-label={`Logout from ${account}`}
          title={`Logout from ${account}`}
        >{`${account.slice(0, 6)}...${account.slice(
          account.length - 3,
          account.length
        )}`}</LogoutButton>
      ) : (
        <Button onClick={connect} disabled={connecting}>
          {connecting ? "connecting (check your metamask)" : "connect"}
        </Button>
      )}
    </Wrapper>
  );
}
