import { SquareMatrix } from "./SquareMatrix";

// https://en.wikipedia.org/wiki/Adjugate_matrix
export const adjugate = <L extends number>(mat:SquareMatrix<L>): SquareMatrix<L> =>
{
    // TODO
};

export const adj = adjugate;
export const adjoint = adjugate;
