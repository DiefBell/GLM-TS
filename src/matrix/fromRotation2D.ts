import { Matrix } from "./types/Matrix";

/**
 * Creates a 2x2 matrix from a given angle.
 * This is the 2x2 identity matrix rotated by the given angle,
 * but is faster than doing the two operations separately.
 * 
 * @param angleRads Angle in radians to rotate matrix by.
 * @returns 2x2 matrix of indentity matrix rotated by 'angleRads'.
 */
export const fromRotation2D = (angleRads: number): Matrix<2, 2> =>
{
    const s = Math.sin(angleRads);
    const c = Math.cos(angleRads);

    return [
        [ c, -s ],
        [ s,  c ]
    ];
};
