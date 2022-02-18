import {
  Section,
  Button,
  Image,
  Skeleton,
  Dialog,
  Close,
} from "./Collection.styles";
import Grid from "react-virtualized/dist/commonjs/Grid";
import { useCallback, useEffect, useRef, useState } from "react";
import useCollection from "../../hooks/useCollection";
import useChainData from "../../hooks/useChainData";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useViewport, { BREAKPOINTS } from "../../hooks/useViewport";
import { PieceBlock } from "../piece/Piece";
import Search from "./Search";

export const TOTAL = 4196;
const ITEM_HEIGHT = 400;

function Item({ id, style, open }) {
  const { connected } = useChainData();
  const {
    collection,
    actions: { loadPiece },
  } = useCollection();

  const elementRef = useRef();

  const piece = collection[id];

  useIntersectionObserver({
    target: elementRef,
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    onIntersect: useCallback(
      ([{ isIntersecting }], observer) => {
        if (isIntersecting) {
          loadPiece(id);
          observer.disconnect();
        }
      },
      [id, loadPiece]
    ),
  });

  return (
    <Button onClick={open} ref={elementRef} style={style}>
      {piece ? <Image src={piece.image} alt="" /> : <Skeleton />}
      <span>{`0x${id.toString(16)}`}</span>
      {!piece && (
        <small>{`[not loaded${
          connected ? "" : " - connection required"
        }]`}</small>
      )}
    </Button>
  );
}

export default function Collection() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [colWidth, setColWidth] = useState(1);
  const [openPiece, setOpenPiece] = useState();

  const extraSmall = useViewport(BREAKPOINTS.xs);
  const small = useViewport(BREAKPOINTS.sm);
  const medium = useViewport(BREAKPOINTS.md);

  const {
    collection,
    contract,
    actions: { loadPiece },
  } = useCollection();

  const columns = extraSmall ? 1 : small ? 2 : medium ? 3 : 4;

  useEffect(() => {
    function updateMeasures() {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
      setColWidth(window.innerWidth / columns);
    }

    window.addEventListener("resize", updateMeasures);

    updateMeasures();

    return () => {
      window.removeEventListener("resize", updateMeasures);
    };
  }, [columns]);

  useEffect(() => {
    if (openPiece && !collection[openPiece]) {
      loadPiece(openPiece);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openPiece]);

  return (
    <Section>
      <Grid
        width={width}
        height={height}
        columnCount={columns}
        columnWidth={colWidth}
        rowCount={TOTAL / 3}
        rowHeight={ITEM_HEIGHT}
        cellRenderer={({ key, columnIndex, rowIndex, style }) => {
          const id = columnIndex + rowIndex * 3;

          return (
            <Item
              key={key}
              style={style}
              id={id}
              open={() => setOpenPiece(id)}
            />
          );
        }}
      />
      {openPiece && (
        <>
          <Dialog tabIndex={1} onClick={() => setOpenPiece(undefined)}>
            <PieceBlock
              piece={collection[openPiece]}
              id={openPiece}
              contract={contract}
            />
          </Dialog>
          <Close onClick={() => setOpenPiece(undefined)}>close</Close>
        </>
      )}
      <Search onOpenPiece={setOpenPiece} />
    </Section>
  );
}
