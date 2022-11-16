import { Matrix } from "./types/Matrix";

export interface IFov
{
	upRads: number;
	downRads: number;
	leftRads: number;
	rightRads: number;
}

/**
 * Creates a perspective projection matrix with the given field of view.
 * 
 * @param fov The up, down, left, and right angles of the field-of-view in radians.
 * @param near The near clipping plane (near bound of frustum).
 * @param far The far clipping plane (far bound of frustum).
 * 
 * @returns Projection matrix.
 */
export const perspectiveFromFov = (fov: IFov, near: number, far: number): Matrix<4, 4> =>
{
	const upTan = Math.tan(fov.upRads);
	const downTan = Math.tan(fov.downRads);
	const leftTan = Math.tan(fov.leftRads);
	const rightTan = Math.tan(fov.rightRads);

	const xScale = 2 / (leftTan + rightTan);
	const yScale = 2 / (upTan + downTan);

	return [
		[   xScale,     0,        - ((leftTan - rightTan) * xScale * 0.5 ),		0 							],
		[ 0,            yScale,     (upTan - downTan) * yScale * 0.5,        	0 							],
		[ 0,			0,			far / (near - far),							(far * near) / (near - far)	],
		[ 0,			0,			-1,											0							]
	];
};
