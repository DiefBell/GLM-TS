import { FixedLengthArray } from "../../common/FixedLengthArray";

export type Matrix<ROWS extends number, COLS extends number> = FixedLengthArray<FixedLengthArray<number, COLS>, ROWS>;
