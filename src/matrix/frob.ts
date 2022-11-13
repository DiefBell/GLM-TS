import { SquareMatrix } from "./types/SquareMatrix";

export const frobeniusNorm2D = (mat: SquareMatrix<2>): number =>
{
    // not sure if using ** makes it slower. Benchmarking required!!
    return Math.sqrt(mat[0][0] ** 2 + mat[0][1] ** 2 + mat[1][0] ** 2 + mat[1][1] ** 2);
};
