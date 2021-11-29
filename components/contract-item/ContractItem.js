export default function ContractItem({ title, address }) {
  return (
    <li key={address}>
      <a target="_blank" href={`https://etherscan.io/address/${address}`}>
        {title}
      </a>
    </li>
  );
}
