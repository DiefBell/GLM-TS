import { determinant } from "./determinant";
import { scale } from "./scale";
import { SquareMatrix } from "./types/SquareMatrix";

export const invert2D = (mat: SquareMatrix<2>): SquareMatrix<2> | null =>
{
    const det = determinant(mat);
    if(det === 0) return null;

    // I think doing this division once now then multiplying might be quicker?
    // Instead of doing 4 divisions
    const invDet = 1.0 / det;

    return scale(mat, invDet);
};
