import type {
    mat2 as glmMat2
} from "gl-matrix";
import { add } from "./add";
import { Mat2 } from "./types/Mat2";

describe("The Matrix Add function", () =>
{
    let mat2: typeof glmMat2;
    beforeAll(async () =>
    {
        (
            { mat2 } = await import("gl-matrix")
        );
    });

    it("should correctly add two positive 2-D matrices", () =>
    {
        const matrix: Mat2 = [
            [ 1, 2 ],
            [ 3, 4 ]
        ];
        const matrixToAdd: Mat2 = [
            [ 1, 1 ],
            [ 1, 1 ]
        ];
        const matrixOut = add(matrix, matrixToAdd);

        const glMatrix: glmMat2 = [
            1, 3,
            2, 4
        ];
        const glMatrixToAdd: glmMat2 = [
            1, 1,
            1, 1
        ];
        const glMatrixOut = mat2.create();
        mat2.add(glMatrixOut, glMatrix, glMatrixToAdd);

        expect(matrixOut[0][0]).toEqual(glMatrixOut[0]);
        expect(matrixOut[0][1]).toEqual(glMatrixOut[2]);
        expect(matrixOut[1][0]).toEqual(glMatrixOut[1]);
        expect(matrixOut[1][1]).toEqual(glMatrixOut[3]);
    });
});
