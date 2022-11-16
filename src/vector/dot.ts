import { Vector } from "./types/Vector";
import { Equal } from "../common/arithmetic";

type VectorsNotSameSizeError<D1 extends number, D2 extends number> =
    `Vectors with ${D1} dimensions and ${D2} dimensions are invalid. Dot product requires that both vectors be of equal number of dimensions.`;

export const dot = <
    D1 extends number,
    D2 extends number
>
(
    a: Equal<D1, D2> extends true ? Vector<D1> : never,
    b: Equal<D1, D2> extends true ? Vector<D2> : never,
)
: Equal<D1, D2> extends true ? number : VectorsNotSameSizeError<D1, D2> =>
{
    let val = 0;

    a.forEach(
        (_: number, idx: number) => val += a[idx] * b[idx]
    );

    // @ts-ignore
    return val;
};

// const a1: Vector<2> = [ 1, 2 ];
// const a2: Vector<2> = [ 3, 4 ];
// const b: Vector<3> = [ 5, 6, 7 ];

// const works = dot(a1, a2);
// const doesntWork = dot(a1, b);
