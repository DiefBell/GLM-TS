import { Matrix } from "./types/Matrix";

// idk if discriminated unions is going to add much to compute time,
// needs some benchmarking
export interface IFovAsymmetric
{
	type: "Field of View from four angles";
	upRads: number;
	downRads: number;
	leftRads: number;
	rightRads: number;
}

export interface IFovSymmetric
{
	type: "Field of View from a vertical FOV angle and a horizontal FOV angle";
	verticalRads: number;
	horizontalRads: number;
}

export interface IFovAspectRatio
{
	type: "Field of View from a vertical FOV angle and an aspect ratio";
	verticalRads: number;
	aspectRatio: number;
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
export const perspectiveFromFov = (
	fov: IFovAsymmetric | IFovSymmetric | IFovAspectRatio,
	near: number, far: number
): Matrix<4, 4> =>
{
	const getAllFovs = () =>
	{
		switch(fov.type)
		{
			case "Field of View from four angles":
				return [ fov.upRads, fov.downRads, fov.leftRads, fov.rightRads ];
			case "Field of View from a vertical FOV angle and a horizontal FOV angle":
				return [ fov.verticalRads / 2, fov.verticalRads / 2, fov.horizontalRads / 2, fov.horizontalRads / 2 ];
			case "Field of View from a vertical FOV angle and an aspect ratio":
				return [
					fov.verticalRads / 2,
					fov.verticalRads / 2,
					fov.aspectRatio * fov.verticalRads / 2,
					fov.aspectRatio * fov.verticalRads / 2
				];
		}
	};

	const [ upRads, downRads, leftRads, rightRads ] = getAllFovs();
	
	const upTan = Math.tan(upRads);
	const downTan = Math.tan(downRads);
	const leftTan = Math.tan(leftRads);
	const rightTan = Math.tan(rightRads);

	const xScale = 2.0 / (leftTan + rightTan);
	const yScale = 2.0 / (upTan + downTan);

	return [
		[   xScale,     0,        - ((leftTan - rightTan) * xScale * 0.5 ),		0 							],
		[ 0,            yScale,     (upTan - downTan) * yScale * 0.5,        	0 							],
		[ 0,			0,			far / (near - far),							(far * near) / (near - far)	],
		[ 0,			0,			-1.0,											0							]
	];
};
