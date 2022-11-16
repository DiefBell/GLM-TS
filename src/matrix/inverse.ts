import { Equal } from "../common/arithmetic";
import { determinant } from "./determinant";
import { scale } from "./scale";
import { Matrix } from "./types/Matrix";

const abs = Math.abs;
const epsilon = Number.EPSILON;

type MatrixNotSquareError<ROWS extends number, COLS extends number> =
    `Matrix with dimensions ${ROWS}x${COLS} is invalid. Supplied matrix must be square.`;

export const inverse = 
<
    ROWS extends number,
    COLS extends number
>
(
    mat: Equal<ROWS, COLS> extends true ? Matrix<ROWS, COLS> : never
)
: Equal<ROWS, COLS> extends true ? Matrix<ROWS, COLS> | null : MatrixNotSquareError<ROWS, COLS> =>
{
    const det = determinant(mat);
    if(abs(det) < epsilon)
        // @ts-ignore
        return null;

    const invDet = 1.0 / det;

    // @ts-ignore
    return scale(mat, invDet);
};

// const s: Matrix<2, 2> = [
//     [ 1, 2 ],
//     [ 3, 4 ]
// ];
// const shouldWork = inverse(s);

// const ns: Matrix<2, 3> = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ]
// ];
// const shouldntWork = inverse(ns);
