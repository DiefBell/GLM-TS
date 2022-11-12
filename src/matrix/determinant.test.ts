import { determinant } from "./determinant";
import { Matrix } from "./types/Matrix";

// TODO: Add some tests for non-square matrices.

describe("Determinant function", () =>
{
    it("correctly calculates the determinant of a 2x2 matrix", () =>
    {
        const mat1: Matrix<2, 2> = [
            [ 1, 2 ],
            [ 3, 4 ]
        ];
        expect(determinant(mat1)).toEqual(-2);
    });

    it("correctly calculates the determinant of a 3x3 matrix", () =>
    {
        const mat1: Matrix<3, 3> = [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ]
        ];
        expect(determinant(mat1)).toEqual(0);
    });

    it("correctly calculates the determinant of a 4x4 matrix", () =>
    {
        const mat1: Matrix<4, 4> = [
            [ 1, 3, 5, 9 ],
            [ 1, 3, 1, 7 ],
            [ 4, 3, 9, 7 ],
            [ 5, 2, 0, 9 ]
        ];
        expect(determinant(mat1)).toEqual(-376);
    });
});
