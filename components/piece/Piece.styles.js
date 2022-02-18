import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
`;

export const Block = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 80vw;
  height: 80vh;
  object-position: center;
  object-fit: contain;
`;

export const Skeleton = styled.div`
  background-color: #040a27;
  width: 375px;
  height: 500px;
`;

export const Small = styled.small`
  font-size: 0.6rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
`;

export const Attributes = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;

  & * {
    font-size: 0.8rem;
  }
`;

export const Dl = styled.dl`
  margin: 0;
  display: flex;

  & > dd {
    margin: 0;
    margin-right: 2rem;
  }
`;

export const Back = styled.a`
  align-self: baseline;
  margin-bottom: 1rem;
  font-size: 0.7rem;
`;
