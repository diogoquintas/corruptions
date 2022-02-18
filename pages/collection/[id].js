import { useRouter } from "next/router";
import Piece from "../../components/piece/Piece";

export default function PiecePage() {
  const { query } = useRouter();

  return <Piece id={query.id} />;
}
