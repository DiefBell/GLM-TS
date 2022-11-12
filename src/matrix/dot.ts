import { Equal } from "../common/arithmetic";
import { FixedLengthArray } from "../common/FixedLengthArray";

type ArraysInvalid<L1 extends number, L2 extends number> =
    `Array with length ${L1} cannot be dot-producted with array with differing length of ${L2}`;

/**
 * Dot-products two arrays of the same length.
 * @param a 
 * @param b 
 * @returns 
 */
export const dot = <
    L1 extends number,
    L2 extends number,
>(
    a: Equal<L1, L2> extends true ? FixedLengthArray<number, L1> : never,
    b: Equal<L1, L2> extends true ? FixedLengthArray<number, L2> : never,
)
: Equal<L1, L2> extends true ? number : ArraysInvalid<L1, L2> =>
{
    // @ts-ignore
    return a.reduce(
        (prev: number, curr: number, idx: number) => prev + (curr * b[idx]),
        0
    ) as number;
};

// const willWork = dot(
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ]
// );
// const wontWork = dot(
//     [ 1, 2, 3 ],
//     [ 4, 5 ]
// );

