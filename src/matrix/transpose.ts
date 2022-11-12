import { Matrix } from "./types/Matrix";

export const transpose = <ROWS extends number, COLS extends number>(mat: Matrix<ROWS, COLS>): Matrix<COLS, ROWS> =>
{
    const rows = mat.length;
    const cols = mat[0].length;

    const result = new Array<Array<number>>();

    for(let row = 0; row < cols; row++)
    {
        result.push([]);

        for(let col = 0; col < rows; col++)
        {
            result[row].push(mat[col][row]);
        }
    }

    return result as Matrix<COLS, ROWS>;
};
