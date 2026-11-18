import type { PieceType } from "../src/engine/types";
import { NextQueue } from "../src/components/NextQueue";
export function NextPiecePreview({ pieces }: { pieces: PieceType[] }) { return <NextQueue pieces={pieces} />; }
