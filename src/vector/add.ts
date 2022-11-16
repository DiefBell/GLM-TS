import { Vector } from "./types/Vector";
import { Equal } from "../common/arithmetic";

type VectorsNotSameSizeError<D1 extends number, D2 extends number> =
    `Vectors with ${D1} dimensions and ${D2} dimensions are invalid. Vectors may only be added to vectors with the same number of dimensions.`;

/**
 * Adds vector 'a' to vector 'b'.
 * 
 * @param a First append vector.
 * @param b Second append vector.
 * 
 * @returns Sum of vectors 'a' and 'b'.
 */
export const add = <
    D1 extends number,
    D2 extends number
>
(
    a: Equal<D1, D2> extends true ? Vector<D1> : never,
    b: Equal<D1, D2> extends true ? Vector<D2> : never,
)
: Equal<D1, D2> extends true ? Vector<D1> : VectorsNotSameSizeError<D1, D2> =>
{
    const vec = a.map(
        (_: number, idx: number) => a[idx] + b[idx]
    ) as Vector<D1>;

    // @ts-ignore
    return vec;
};

// const a1: Vector<2> = [ 1, 2 ];
// const a2: Vector<2> = [ 3, 4 ];
// const b: Vector<3> = [ 5, 6, 7 ];

// const works = add(a1, a2);
// const doesntWork = add(a1, b);
