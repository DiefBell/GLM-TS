import { Matrix } from "../types/Matrix";
import { submatrix } from "./submatrix";

describe("Submatrix util function", () =>
{
    it("returns the corrrect submatrices of 3x3 matrices", () =>
    {
        const mat: Matrix<3, 3> = [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ]
        ];

        expect(submatrix(mat, 0, 0)).toEqual([
            [ 5, 6 ],
            [ 8, 9 ]
        ]);

        expect(submatrix(mat, 0, 1)).toEqual([
            [ 4, 6 ],
            [ 7, 9 ]
        ]);

        expect(submatrix(mat, 0, 2)).toEqual([
            [ 4, 5 ],
            [ 7, 8 ]
        ]);

        expect(submatrix(mat, 1, 0)).toEqual([
            [ 2, 3 ],
            [ 8, 9 ]
        ]);

        expect(submatrix(mat, 1, 1)).toEqual([
            [ 1, 3 ],
            [ 7, 9 ]
        ]);

        expect(submatrix(mat, 1, 2)).toEqual([
            [ 1, 2 ],
            [ 7, 8 ]
        ]);

        expect(submatrix(mat, 2, 0)).toEqual([
            [ 2, 3 ],
            [ 5, 6 ]
        ]);

        expect(submatrix(mat, 2, 1)).toEqual([
            [ 1, 3 ],
            [ 4, 6 ]
        ]);

        expect(submatrix(mat, 2, 2)).toEqual([
            [ 1, 2 ],
            [ 4, 5 ]
        ]);
    });
});
