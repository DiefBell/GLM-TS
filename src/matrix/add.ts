import { Matrix } from "./types/Matrix";


export const add = <R extends number, C extends number>(a: Matrix<R, C>, b: Matrix<R, C>): Matrix<R, C> =>
{
    const rows = a.length;
    const cols = a[0].length;

    const out = new Array<Array<number>>();

    for(let row = 0; row < rows; row++)
    {
        out.push([]);
        for(let col = 0; col < cols; col++)
        {
            out[row].push(
                a[row][col] + b[row][col]
            );
        }
    }

    return out as Matrix<R, C>;
};
