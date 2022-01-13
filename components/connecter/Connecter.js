import styled from "@emotion/styled";
import useChainData from "../../hooks/useChainData";

const Wrapper = styled.div`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 900;
`;

const Button = styled.button`
  color: #3cb702;
  background: #0d1302;
  border: 0;
  cursor: pointer;

  &:hover:disabled {
    background-color: #0d1302;
    cursor: not-allowed;
    color: #3cb702;
  }
`;

const LogoutButton = styled.button`
  color: #3cb702;
  background: #0d1302;
  border: 0;
  cursor: pointer;

  &:hover {
    color: #3cb702;
    background: #0d1302;
    text-decoration: line-through;
  }
`;

export default function Connecter() {
  const {
    account,
    provider,
    dataChannel,
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
          {connecting ? "connecting" : "connect"}
        </Button>
      )}
    </Wrapper>
  );
}
