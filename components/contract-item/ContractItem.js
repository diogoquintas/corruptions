export default function ContractItem({ title, address }) {
  return (
    <li key={address}>
      {title} -{" "}
      <a target="_blank" href={`https://etherscan.io/address/${address}`}>
        {address}
      </a>
    </li>
  );
}
