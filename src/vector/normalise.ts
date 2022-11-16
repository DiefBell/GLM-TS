import { magnitude } from "./magnitude";
import { Vector } from "./types/Vector";

/**
 * Normalises the given vector.
 * 
 * @param vec The vector to normalise.
 * 
 * @returns The normalised vector.
 */
export const normalise = <D extends number>(vec: Vector<D>): Vector<D> =>
{
    const mag = magnitude(vec);
    return vec.map(
        (val: number) => val / mag
    ) as Vector<D>;
};

/**
 * Alias for {@link normalise}.
 */
export const normalize = normalise;
