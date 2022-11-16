import { Equal } from "../../common/arithmetic";
import { IntRange } from "../../common/arithmetic/IntRange";
import { Matrix } from "../types/Matrix";

type IsMatrixSquare<ROWS extends number, COLS extends number> =
    Equal<ROWS, COLS> extends true ? true : false;

type MatrixInvalid<ROWS extends number, COLS extends number> =
    `This function only accepts square matrices. ${ROWS} x ${COLS} matrix is not square!`;


// type IsRowValid<ROW extends number, ROWS extends number> =
//     LessThan<ROW, ROWS> extends true ? true : false;

// type RowInvalid = "Argument for 'row' invalid as it may not exceed the total number of rows in the matrix!";


// type IsColValid<COL extends number, COLS extends number> =
//     LessThan<COL, COLS> extends true ? true : false;

// type ColInvalid = "Argument for 'col' invalid as it may not exceed the total number of columns in the matrix!";



/**
 * Gets the N-1 x N-1 submatrix of NxN matrix `mat`, with the given row and column ignored.
 * @param mat NxN matrix to get submatrix from.
 * @param skipRow Row to ignore from matrix.
 * @param skipCol Column to ignore from matrix.
 * @returns N-1 x N-1 submatrix of `mat` with given row and col ignored.
 */
export const submatrix = <ROWS extends number, COLS extends number>
(
    mat: IsMatrixSquare<ROWS, COLS> extends true ? Matrix<ROWS, COLS> : never,
    skipRow: IntRange<0, ROWS>,
    skipCol: IntRange<0, COLS>
)
:
IsMatrixSquare<ROWS, COLS> extends false
    ? MatrixInvalid<ROWS, COLS>
    : Matrix<ROWS, COLS> =>
{
    const rows = mat.length;
    const cols = mat[0].length;

    const submatrix = new Array<Array<number>>();

    for(let row = 0; row < rows; row++)
    {
        if(row === skipRow) continue;
        submatrix.push([]);

        for(let col = 0; col < cols; col++)
        {
            if(col === skipCol) continue;
            submatrix[submatrix.length - 1].push(mat[row][col]);
        }
    }

    // @ts-ignore
    return submatrix as Matrix<ROWS, COLS>;
};


// const square: Matrix<3, 3> = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ];
// submatrix(square, 4, 1);



// const notSquare: Matrix<2, 3> = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
// ];
// submatrix(notSquare, 1, 1);
