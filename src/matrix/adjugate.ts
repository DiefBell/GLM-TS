import { Matrix } from "./types/Matrix";
import { SquareMatrix } from "./types/SquareMatrix";

// https://en.wikipedia.org/wiki/Adjugate_matrix
// this is a generic one but not gonna bother probably
// export const adjugate = <L extends number>(mat: SquareMatrix<L>): SquareMatrix<L> =>
// {
//     // TODO
//     return [ [ 0 ] ] as Matrix<L, L>;
// };

// export const adj = adjugate;
// export const adjoint = adjugate;

export const adjugate2D = (mat: SquareMatrix<2>): SquareMatrix<2> =>
{
    return [
        [ mat[1][1],  -mat[0][1] ],
        [ -mat[1][0],  mat[0][0]]
    ];
};

