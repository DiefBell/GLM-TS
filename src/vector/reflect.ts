import { Vector } from "./types/Vector";
import { Equal } from "../common/arithmetic";
import { add } from "./add";
import { scale } from "./scale";
import { dot } from "./dot";

type VectorsNotSameSizeError<D1 extends number, D2 extends number> =
    `Vectors with ${D1} dimensions and ${D2} dimensions are invalid. Reflecting vectors requires them to have the same number of dimensions.`;

export const reflect = <
    D1 extends number,
    D2 extends number
>
(
    incident: Equal<D1, D2> extends true ? Vector<D1> : never,
    normal: Equal<D1, D2> extends true ? Vector<D2> : never,
)
: Equal<D1, D2> extends true ? Vector<D1> : VectorsNotSameSizeError<D1, D2> =>
{
    // @ts-ignore
    return add(
        // @ts-ignore
        incident,
        // @ts-ignore
        scale(
            normal,
            // @ts-ignore
            2 * dot(normal, incident)
        )
    );
};

// const a1: Vector<2> = [ 1, 2 ];
// const a2: Vector<2> = [ 3, 4 ];
// const b: Vector<3> = [ 5, 6, 7 ];

// const works = reflect(a1, a2);
// const doesntWork = reflect(a1, b);
