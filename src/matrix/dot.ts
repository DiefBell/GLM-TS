import { FixedLengthArray } from "../common/FixedLengthArray";

type CannotDotProductArrays<L1 extends number, L2 extends number> =
    `Array with length ${L1} cannot be dot-producted with array with differing length of ${L2}`;

/**
 * Dot-products two arrays of the same length.
 * @param a 
 * @param b 
 * @returns 
 */
export const dot = <
    L1 extends number | undefined,
    L2 extends number | undefined,
    RESULT = L1 extends number ? L2 extends number ? L1 extends L2 ? number : CannotDotProductArrays<L1, L2> : number : number
>(
    a: L1 extends undefined ? number[] : L1 extends number ? L1 extends L2 ? FixedLengthArray<number, L1> : never : never,
    b: L1 extends undefined ? number[] : L2 extends number ? L1 extends L2 ? FixedLengthArray<number, L2> : never : never,
)
: RESULT =>
{
    return a.reduce(
        (prev: number, curr: number, idx: number) => prev + (curr * b[idx]),
        0
    ) as RESULT;
};

// const willWork = dot(
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ]
// );
// const wontWork = dot(
//     [ 1, 2, 3 ],
//     [ 4, 5 ]
// );

