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

export const determinant2D = (mat: Matrix<2, 2>): number =>
{
    return (mat[0][0] * mat[1][1]) - (mat[0][1] * mat[1][0]); 
};

// export const determinant3D = (mat: Matrix<3, 3>): number =>
// {

// };

export const determinant4D = (mat: Matrix<4, 4>): number =>
{
    return mat[0][3] * mat[1][2] * mat[2][1] * mat[3][0] - mat[0][2] * mat[1][3] * mat[2][1] * mat[3][0]
         - mat[0][3] * mat[1][1] * mat[2][2] * mat[3][0] + mat[0][1] * mat[1][3] * mat[2][2] * mat[3][0]
         + mat[0][2] * mat[1][1] * mat[2][3] * mat[3][0] - mat[0][1] * mat[1][2] * mat[2][3] * mat[3][0]
         - mat[0][3] * mat[1][2] * mat[2][0] * mat[3][1] + mat[0][2] * mat[1][3] * mat[2][0] * mat[3][1]
         + mat[0][3] * mat[1][0] * mat[2][2] * mat[3][1] - mat[0][0] * mat[1][3] * mat[2][2] * mat[3][1]
         - mat[0][2] * mat[1][0] * mat[2][3] * mat[3][1] + mat[0][0] * mat[1][2] * mat[2][3] * mat[3][1]
         + mat[0][3] * mat[1][1] * mat[2][0] * mat[3][2] - mat[0][1] * mat[1][3] * mat[2][0] * mat[3][2]
         - mat[0][3] * mat[1][0] * mat[2][1] * mat[3][2] + mat[0][0] * mat[1][3] * mat[2][1] * mat[3][2]
         + mat[0][1] * mat[1][0] * mat[2][3] * mat[3][2] - mat[0][0] * mat[1][1] * mat[2][3] * mat[3][2]
         - mat[0][2] * mat[1][1] * mat[2][0] * mat[3][3] + mat[0][1] * mat[1][2] * mat[2][0] * mat[3][3]
         + mat[0][2] * mat[1][0] * mat[2][1] * mat[3][3] - mat[0][0] * mat[1][2] * mat[2][1] * mat[3][3]
         - mat[0][1] * mat[1][0] * mat[2][2] * mat[3][3] + mat[0][0] * mat[1][1] * mat[2][2] * mat[3][3];
};
