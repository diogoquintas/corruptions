import { useEffect } from "react";
import useCollection from "../../hooks/useCollection";
import {
  Section,
  Block,
  Image,
  Skeleton,
  Title,
  Small,
  Attributes,
  Dl,
  Back,
} from "./Piece.styles";
import Link from "next/link";

export function PieceBlock({ id, piece, contract }) {
  return (
    <Link
      href={`https://opensea.io/assets/0x5bdf397bb2912859dbd8011f320a222f79a28d2e/${id}`}
      passHref
    >
      <Block
        onClick={(evt) => evt.stopPropagation()}
        target="_blank"
        referrerPolicy="no-referrer"
      >
        {piece ? <Image src={piece.image} alt="" /> : <Skeleton />}
        <Title>{`0x${id.toString(16)}`}</Title>
        {piece ? (
          <>
            <Small>{piece.description}</Small>
            <Small>[see in opensea]</Small>
            <Attributes>
              {piece.attributes.map((att, index) => (
                <li key={index}>
                  <Dl>
                    <dd>{`${att.trait_type}:`}</dd>
                    <dt>{att.value}</dt>
                  </Dl>
                </li>
              ))}
            </Attributes>
          </>
        ) : (
          <Small>{`[not loaded${
            contract ? "" : " - connection required"
          }]`}</Small>
        )}
      </Block>
    </Link>
  );
}

export default function Piece({ id: initialId }) {
  const id = Number(initialId);
  const {
    collection,
    contract,
    actions: { loadPiece },
  } = useCollection();

  useEffect(() => {
    if (!contract) return;

    loadPiece(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract]);

  if (!id) return null;

  const piece = collection[id];

  return (
    <Section>
      <Link href="/collection" passHref>
        <Back>back to collection</Back>
      </Link>
      <PieceBlock piece={piece} id={id} contract={contract} />
    </Section>
  );
}
