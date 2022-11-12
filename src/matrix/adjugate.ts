import { Matrix } from "./types/Matrix";
import { SquareMatrix } from "./types/SquareMatrix";

// https://en.wikipedia.org/wiki/Adjugate_matrix
export const adjugate = <L extends number>(mat: SquareMatrix<L>): SquareMatrix<L> =>
{
    // TODO
    return [ [ 0 ] ] as Matrix<L, L>;
};

export const adj = adjugate;
export const adjoint = adjugate;
