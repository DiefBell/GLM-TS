import { dot } from "./dot";
import { FixedLengthArray } from "../common/FixedLengthArray";
import { Matrix } from "./types/Matrix";

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
    C2 extends number,
    RESULT = C1 extends R2 ? Matrix<R1, C2> : MatricesCannotBeMultiplied<R1, C1, R2, C2>
>(
    l: C1 extends R2 ? Matrix<R1, C1> : never,
    r: C1 extends R2 ? Matrix<R2, C2> : never
): RESULT =>
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
            result[lRow].push(dot<undefined, undefined>(row, col));
        }
    }

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
