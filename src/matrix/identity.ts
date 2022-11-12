import { Matrix } from "./types/Matrix";

/**
 * Returns the identity matrix for an NxN matrix.
 * 
 * @param n Size of the matrix to create.
 * @returns NxN identity matrix.
 */
export const identity = <L extends number>(n: L): Matrix<L, L> =>
{
    const mat = new Array<Array<number>>();

    for(let row = 0; row < n; row++)
    {
        mat.push([]);
        for(let col = 0; col < n; col++)
        {
            mat[row].push(
                row === col
                ? 1
                : 0
            );
        }
    }

    return mat as Matrix<L, L>;
};
