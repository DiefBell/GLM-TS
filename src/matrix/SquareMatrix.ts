import { FixedLengthArray } from "../common/FixedLengthArray";

export type SquareMatrix<L extends number> = FixedLengthArray<FixedLengthArray<number, L>, L>;
