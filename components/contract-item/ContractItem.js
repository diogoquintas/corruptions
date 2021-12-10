import styled from "@emotion/styled";
import { useState } from "react";

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: none;
  border: 0;
  font-size: 12px;
  cursor: pointer;
  color: currentColor;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  max-width: 500px;
  color: #b76f02;
`;

export default function ContractItem({ title, address, description }) {
  const [open, setOpen] = useState(false);

  return (
    <Li key={address}>
      <div>
        <a target="_blank" href={`https://etherscan.io/address/${address}`}>
          {title}
        </a>
        {description && (
          <Button onClick={() => setOpen(!open)}>{`${
            open ? "- info" : "+ info"
          }`}</Button>
        )}
      </div>
      {description && open && <Description>{description}</Description>}
    </Li>
  );
}
