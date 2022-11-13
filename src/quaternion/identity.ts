import { Quaternion } from "./types/Quaternion";

/**
 * Returns the identity quaternion.
 * 
 * @returns Identity quaternion.
 */
export const identity = (): Quaternion =>
{
    return [
        [ 0, 0, 0, 1 ]
    ];
};
