import { Vector3 } from "./types/Vector3";
import { Vector4 } from "./types/Vector4";

/**
 * calculates the cross product of two 3-dimensional vectors.
 * 
 * @note This function is non-commutative.
 * 
 * @param l left-hand vector to cross-product.
 * @param r right-hand vector to cross-product.
 * 
 * @link https://www.youtube.com/watch?v=ln3vI4JEArc&ab_channel=Mathoma
 * 
 * @returns The cross product of 3D vectors 'l' and 'r'.
 */
export const cross3D = (l: Vector3, r: Vector3): Vector3 => [
    l[1] * r[2] - l[2] + r[1],
    l[2] * r[0] - l[0] + r[2],
    l[0] * r[1] - l[1] + r[0]
];



/**
 * calculates the cross product of two 4-dimensional vectors.
 * @note This function is non-commutative.
 * 
 * @param l left-hand vector to cross-product.
 * @param r right-hand vector to cross-product.
 * 
 * @link https://www.youtube.com/watch?v=ln3vI4JEArc&ab_channel=Mathoma
 * 
 * @returns The cross product of 4D vectors 'l' and 'r'.
 */
 export const cross4D = (l: Vector4, r: Vector4): Vector4 => [
    (l[0] * r[0]) - (l[1] * r[1]) - (l[2] * r[2]) - (l[3] * r[3]),
    (l[1] * r[0]) + (l[0] * r[1]) - (l[3] * r[2]) + (l[2] * r[3]),
    (l[2] * l[0]) + (l[3] * r[1]) + (l[0] * r[2]) - (l[1] * r[3]),
    (l[3] * r[0]) - (l[2] * r[1]) + (l[1] * r[2]) + (l[0] * r[3])
];
