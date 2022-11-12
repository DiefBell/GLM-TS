import { equals } from "./equals";
import { Matrix } from "./types/Matrix";

describe("Equals function", () =>
{
    it("returns true if 2x2 matrices match", () =>
    {
        const a: Matrix<2, 2> = [
            [ 1, 2 ],
            [ 3, 4 ]
        ];
        const b: Matrix<2, 2> = [
            [ 1, 2 ],
            [ 3, 4 ]
        ];
        expect(equals(a, b)).toBe(true);
    });

    it("returns true if 2x2 matrices do not match", () =>
    {
        const a: Matrix<2, 2> = [
            [ 1, 2 ],
            [ 3, 4 ]
        ];
        const b: Matrix<2, 2> = [
            [ 2, 1 ],
            [ 4, 3 ]
        ];
        expect(equals(a, b)).toBe(false);
    });
    
    it("returns true if 2x3 matrices match", () =>
    {
        const a: Matrix<2, 3> = [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ]
        ];
        const b: Matrix<2, 3> = [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ]
        ];
        expect(equals(a, b)).toBe(true);
    });
    
    it("returns true if 2x3 matrices do not match", () =>
    {
        const a: Matrix<2, 3> = [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ]
        ];
        const b: Matrix<2, 3> = [
            [ 1, 2, 3 ],
            [ 4, 5, 7 ]
        ];
        expect(equals(a, b)).toBe(false);
    });
});
