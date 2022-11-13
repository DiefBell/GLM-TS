import { Matrix } from "./types/Matrix";

export const scale = <ROWS extends number, COLS extends number>(mat: Matrix<ROWS, COLS>, scaleFactor: number): Matrix<ROWS, COLS> =>
{
    const rows = mat.length;
    const cols = mat[0].length;

    const result = new Array<Array<number>>();

    for(let row = 0; row < rows; row++)
    {
        result.push([]);
        for(let col = 0; col < cols; col++)
        {
            result[row].push(mat[row][col] * scaleFactor);
        }
    }

    return result as Matrix<ROWS, COLS>;
};
