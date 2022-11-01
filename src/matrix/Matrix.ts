import { FixedLengthArray } from "./FixedLengthArray";

export type Matrix<ROWS extends number, COLS extends number> = FixedLengthArray<FixedLengthArray<number, COLS>, ROWS>;

export type Mat2 = Matrix<2, 2>;
export type Mat3 = Matrix<3, 3>;
export type Mat4 = Matrix<4, 4>;



