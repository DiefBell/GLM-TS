import { determinant, determinant4D } from "./determinant";
import { Matrix } from "./types/Matrix";

// TODO: Add some tests for non-square matrices.

describe("The Determinant function", () =>
{
    describe("for matrices of unknown dimensions", () =>
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
            const a: Matrix<4, 4> = [
                [ 4,  3,  2, 2 ],
                [ 0,  1, -3, 3 ],
                [ 0, -1,  3, 3 ],
                [ 0,  3,  1, 1 ]
            ];
            expect(determinant4D(a)).toEqual(-240);

            const b: Matrix<4, 4> = [
                [ 1, 5, 7, 2 ],
                [ 4, 1, 4, 0 ],
                [ 7, 6, 1, 0 ],
                [ 8, 3, 9, 1 ]
            ];
            expect(determinant4D(b)).toEqual(134);

            const c: Matrix<4, 4> = [
                [ 1, 2, 6, 6 ],
                [ 4, 7, 3, 2 ],
                [ 0, 0, 0, 0 ],
                [ 1, 2, 2, 9 ]
            ];
            expect(determinant4D(c)).toEqual(0);

            const d: Matrix<4, 4> = [
                [ 2, 1, 2, 3 ],
                [ 6, 7, 6, 9 ],
                [ 0, 6, 0, 0 ],
                [ 1, 2, 1, 4 ]
            ];
            expect(determinant4D(d)).toEqual(0);

            const e: Matrix<4, 4> = [
                [ 1, 2,  3,  4 ],
                [ 2, 5,  7,  3 ],
                [ 4, 10, 14, 6 ],
                [ 3, 4,  2,  7 ]
            ];
            expect(determinant4D(e)).toEqual(0);

            const f: Matrix<4, 4> = [
                [ 1, 3, 5, 9 ],
                [ 1, 3, 1, 7 ],
                [ 4, 3, 9, 7 ],
                [ 5, 2, 0, 9 ]
            ];
            expect(determinant(f)).toEqual(-376);
        });
    });

    describe("for 4x4 matrices", () =>
    {
        it("correctly returns the detminant of the matrix", () =>
        {
            const a: Matrix<4, 4> = [
                [ 4,  3,  2, 2 ],
                [ 0,  1, -3, 3 ],
                [ 0, -1,  3, 3 ],
                [ 0,  3,  1, 1 ]
            ];
            expect(determinant4D(a)).toEqual(-240);

            const b: Matrix<4, 4> = [
                [ 1, 5, 7, 2 ],
                [ 4, 1, 4, 0 ],
                [ 7, 6, 1, 0 ],
                [ 8, 3, 9, 1 ]
            ];
            expect(determinant4D(b)).toEqual(134);

            const c: Matrix<4, 4> = [
                [ 1, 2, 6, 6 ],
                [ 4, 7, 3, 2 ],
                [ 0, 0, 0, 0 ],
                [ 1, 2, 2, 9 ]
            ];
            expect(determinant4D(c)).toEqual(0);

            const d: Matrix<4, 4> = [
                [ 2, 1, 2, 3 ],
                [ 6, 7, 6, 9 ],
                [ 0, 6, 0, 0 ],
                [ 1, 2, 1, 4 ]
            ];
            expect(determinant4D(d)).toEqual(0);

            const e: Matrix<4, 4> = [
                [ 1, 2,  3,  4 ],
                [ 2, 5,  7,  3 ],
                [ 4, 10, 14, 6 ],
                [ 3, 4,  2,  7 ]
            ];
            expect(determinant4D(e)).toEqual(0);

            const f: Matrix<4, 4> = [
                [ 1, 3, 5, 9 ],
                [ 1, 3, 1, 7 ],
                [ 4, 3, 9, 7 ],
                [ 5, 2, 0, 9 ]
            ];
            expect(determinant(f)).toEqual(-376);
        });
    });
});
