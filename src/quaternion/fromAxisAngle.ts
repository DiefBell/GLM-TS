import { Vector } from "../vector/types/Vector";
import { Quaternion } from "./types/Quaternion";

/**
 * Creates a Quaternion based on a rotation about a given axis.
 * 
 * @param axis The axis in 3D space.
 * @param angle The angle about the axis.
 * @returns a Quaternion.
 */
export const fromAxisAngle = (axis: Vector<3>, angle: number): Quaternion =>
{
    const halfAngle = angle / 2;
    const s = Math.sin(halfAngle);

    return [
        axis[0] * s,
        axis[1] * s,
        axis[2] * s,
        Math.cos(halfAngle)
    ];
};
