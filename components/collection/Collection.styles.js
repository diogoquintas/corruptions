import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  background: none;
  padding: 0;
  margin: 0;
  color: var(--main-green);
  cursor: pointer;

  & small {
    font-size: 0.7rem;
  }

  & span {
    font-size: 0.8rem;
    font-weight: bold;
  }

  &:hover {
    background: none;

    * {
      background: none;
    }
  }
`;

export const Image = styled.img`
  height: 18rem;
`;

export const Skeleton = styled.div`
  height: 18rem;
  width: 375px;
  background-color: #040a27;
`;

export const Dialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #cc00ff3d;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(3px);
  cursor: pointer;
  overflow-y: auto;

  & > a {
    margin: auto 0;
    padding: 2rem 0;
  }
`;

export const Close = styled.button`
  position: fixed;
  top: 2.5rem;
  right: 0.5rem;
  color: var(--main-green);
  background: var(--default-background);
  border: 0;
  cursor: pointer;
`;
