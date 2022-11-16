import { Matrix } from "../matrix";
import { Quaternion } from "../quaternion";
import { Vector } from "../vector";

export const Mat4x1ToQuaternion = (mat: Matrix<4, 1>): Quaternion => [
    mat[0][0],
    mat[1][0],
    mat[2][0],
    mat[3][0]
];

export const Mat1x4ToQuaternion = (mat: Matrix<1, 4>): Quaternion =>[
    mat[0][0],
    mat[0][1],
    mat[0][2],
    mat[0][3]
];

export const QuatToMatrix = (q: Quaternion): Matrix<1, 4> => [ q ];

export const QuatToVertMatrix = (q: Quaternion): Matrix<4, 1> => [
    [ q[0] ],
    [ q[1] ],
    [ q[2] ],
    [ q[3] ]
];

export const Mat4x1ToVector = (mat: Matrix<4, 1>): Vector<4> => [
    mat[0][0],
    mat[1][0],
    mat[2][0],
    mat[3][0]
];
