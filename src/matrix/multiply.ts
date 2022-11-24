import { dot } from "./dot";
import { FixedLengthArray } from "../common/FixedLengthArray";
import { Matrix } from "./types/Matrix";
import { Equal } from "../common/arithmetic";

type MatricesCannotBeMultiplied<R1 extends number, C1 extends number, R2 extends number, C2 extends number> =
    `Matrix with dimensions (${R1},${C1}) cannot be multiplied by a matrix with dimensions (${R2},${C2})!`;

/**
 * Multiplies matrix 'l' by matrix 'r'.
 * 
 * @param l Left-hand R1 x C1 matrix.
 * @param r Right-hand R2 x C2 matrix.
 * @returns New R1 x C2 matrix.
 */
export const multiply = <
    R1 extends number,
    C1 extends number,
    R2 extends number,
    C2 extends number
>(
    l: Equal<C1, R2> extends true ? Matrix<R1, C1> : never,
    r: Equal<C1, R2> extends true ? Matrix<R2, C2> : never
): Equal<C1, R2> extends true ? Matrix<R1, C2> : MatricesCannotBeMultiplied<R1, C1, R2, C2> =>
{
    const lRows = l[0].length;
    const rCols = r.length;

    const result = new Array<Array<number>>();

    for(let lRow = 0; lRow < lRows; lRow++)
    {
        result.push([]);
        for(let rCol = 0; rCol < rCols; rCol++)
        {
            const row = l[lRow] as unknown as FixedLengthArray<number, R2>;
            const col = r.map((rRow) => rRow[rCol]) as FixedLengthArray<number, C1>;
            // @ts-ignore
            result[lRow].push(dot(row, col));
        }
    }

    // @ts-ignore
    return result as RESULT;
};

// const m1: Matrix<1, 2> = [
//     [ 5, 6 ]
// ];
// const m2: Matrix<2, 3> = [
//     [ 8, 9, 7 ],
//     [ 6, 5, 4 ]
// ];

// const willWork = multiply(m1, m2);
// const wontWork = multiply(m2, m1);





/**
 * Multiplies matrix 'l' by matrix 'r',
 * outputting into 'l'.
 * 
 * @param $l Left-hand R1 x C1 matrix.
 * @param r Right-hand R2 x C2 matrix.
 * @returns New R1 x C2 matrix.
 */
export const $multiply = <
    R1 extends number,
    C1 extends number,
    R2 extends number,
    C2 extends number
>(
    // @ts-ignore
    $l: Equal<C1, R2> extends true ? Matrix<R1, C1> : never,
    r: Equal<C1, R2> extends true ? Matrix<R2, C2> : never
// @ts-ignore
): $l is Equal<C1, R2> extends true ? Matrix<R1, C2> : MatricesCannotBeMultiplied<R1, C1, R2, C2> =>
{
    const lRows = $l[0].length;
    const rCols = r.length;

    const result = new Array<Array<number>>();

    for(let lRow = 0; lRow < lRows; lRow++)
    {
        result.push([]);
        for(let rCol = 0; rCol < rCols; rCol++)
        {
            const row = $l[lRow] as unknown as FixedLengthArray<number, R2>;
            const col = r.map((rRow) => rRow[rCol]) as FixedLengthArray<number, C1>;
            // @ts-ignore
            result[lRow].push(dot(row, col));
        }
    }

    return true;
};

// const m1: Matrix<1, 2> = [
//     [ 5, 6 ]
// ];
// const m2: Matrix<2, 3> = [
//     [ 8, 9, 7 ],
//     [ 6, 5, 4 ]
// ];
// const m3: Matrix<3, 4> = [
//     [ 1, 2, 3, 4 ],
//     [ 2, 3, 4, 5 ],
//     [ 3, 4, 5, 6 ]
// ];

// if(!$multiply(m1, m2)) // should work
// {
//     throw new Error();
// }

// $multiply(m1, m2); // shouldn't work

// $multiply(m1, m3); // should work
