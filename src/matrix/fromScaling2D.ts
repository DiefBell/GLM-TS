import { Vector2 } from "../vector";
import { Matrix } from "./types/Matrix";

/**
 * Creates a 2x2 matrix from a given 2D vector.
 * This is the 2x2 identity matrix scaled by the given vector,
 * but is quicker than doing the two operations separately.
 * 
 * @param vec The vector to scale the matrix by.
 * @returns 2x2 matrix of indentity matrix scaled by 'vec'.
 */
export const fromScaling2D = (vec: Vector2): Matrix<2, 2> =>
{
    return [
        [ vec[0], 0     ],
        [ 0,      vec[1]]
    ];
};
