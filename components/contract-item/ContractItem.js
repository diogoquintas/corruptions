import { useState } from "react";

export default function ContractItem({ title, address, description }) {
  const [open, setOpen] = useState(false);

  return (
    <li key={address}>
      <a target="_blank" href={`https://etherscan.io/address/${address}`}>
        {title}
      </a>
      <button onClick={() => setOpen(!open)}>{`${open ? "-" : "+"}`}</button>
      {description && open && <p>{description}</p>}
    </li>
  );
}
