import { Vector } from "../vector/types/Vector";
import { Quaternion } from "./types/Quaternion";

/**
 * Rotates a given vector using the given quaternion.
 * 
 * @param vec the vector to rotate.
 * @param q the quaternion used to rotate.
 * 
 * @link https://www.mathworks.com/help/aeroblks/quaternionrotation.html
 * 
 * @return new vector after the rotation.
 */
export const rotate = (vec: Vector<3>, q: Quaternion): Vector<3> =>
{
    const q00 = 1 - (2 * q[1]**2) - (2 * q[2]**2);
    const q01 = 2 * (q[0] * q[1] + q[3] * q[2]);
    const q02 = 2 * (q[0] * q[2] - q[3] * q[1]);

    const q10 = 2 * (q[0] * q[1] - q[3] * q[2]);
    const q11 = 1 - (2 * q[0]**2 - 2 * q[2] ** 2);
    const q12 = 2 * (q[1] * q[2] + q[3] * q[0]);

    const q20 = 2 * (q[0] * q[2] + q[3] * q[1]);
    const q21 = 2 * (q[1] * q[2] - q[3] * q[0]);
    const q22 = 1 - (2 * q[0]**2) - (2 * q[1]**2);

    return [
        q00 * vec[0] + q01 * vec[1] + q02 * vec[2],
        q10 * vec[0] + q11 * vec[1] + q12 * vec[2],
        q20 * vec[0] + q21 * vec[1] + q22 * vec[2]
    ];
};
