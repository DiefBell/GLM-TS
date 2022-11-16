import { Matrix } from "./types/Matrix";
import { submatrix } from "./util/submatrix";

export const determinant = <ROWS extends number, COLS extends number>(mat: Matrix<ROWS, COLS>): number =>
{   
    const dims = mat.length;

    if(dims === 2) return (mat[0][0] * mat[1][1]) - (mat[0][1] * mat[1][0]);

    let count = 0;
    let multiplier = 1;
    // I feel like this might be quicker than checking `mat.length` every loop but idk

    for(let c = 0; c < dims; c++)
    {
        count += multiplier
            * mat[0][c]
            * determinant(
                // @ts-ignore
                submatrix(mat, 0, c)
            );
        
        multiplier *= -1;
    }

    return count;
};

export const det = determinant;
