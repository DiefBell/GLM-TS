import { Vector } from "./types/Vector";
import { Equal } from "../common/arithmetic";

type VectorsNotSameSizeError<D1 extends number, D2 extends number> =
    `Vectors with ${D1} dimensions and ${D2} dimensions are invalid. Vectors may only be subtracted from vectors with the same number of dimensions.`;

/**
 * Subtracts vector 'r' from vector 'l'.
 * 
 * @note This function is non-commutative.
 * 
 * @param l Minuend vector (vector to be subtracted *from*).
 * @param r Subtrahend vector (vector to be subtracted).
 * 
 * @returns Vector result of subtraction.
 */
export const subtract = <
    D1 extends number,
    D2 extends number
>
(
    l: Equal<D1, D2> extends true ? Vector<D1> : never,
    r: Equal<D1, D2> extends true ? Vector<D2> : never,
)
: Equal<D1, D2> extends true ? Vector<D1> : VectorsNotSameSizeError<D1, D2> =>
{
    const vec = l.map(
        (_: number, idx: number) => l[idx] - r[idx]
    ) as Vector<D1>;

    // @ts-ignore
    return vec;
};

// const a1: Vector<2> = [ 1, 2 ];
// const a2: Vector<2> = [ 3, 4 ];
// const b: Vector<3> = [ 5, 6, 7 ];

// const works = subtract(a1, a2);
// const doesntWork = subtract(a1, b);
