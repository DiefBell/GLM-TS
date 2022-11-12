import { add } from "./add";
import { Mat2 } from "./types/Mat2";

describe("The Matrix Add function", () =>
{
    describe("for 2x2 matrices", () =>
    {
        it("should correctly add matrices of positive numbers", () =>
        {
            const a: Mat2 = [
                [ 1, 2 ],
                [ 3, 4 ]
            ];
            const b: Mat2 = [
                [ 5, 6 ],
                [ 8, 7 ]
            ];
            const result = add(a, b);

            const expected: Mat2 = [
                [ 6,  8  ],
                [ 11, 11 ]
            ];

            expect(result).toEqual(expected);
        });

        it("should correctly add matrices of a mix of positive and negative numbers", () =>
        {
            const a: Mat2 = [
                [ 1, 2 ],
                [ 3, 4 ]
            ];
            const b: Mat2 = [
                [ -5,  6 ],
                [  8, -7 ]
            ];
            const result = add(a, b);

            const expected: Mat2 = [
                [ -4,  8  ],
                [ 11, -3 ]
            ];

            expect(result).toEqual(expected);
        });

        it("should correctly add matrices of only negative numbers", () =>
        {
            const a: Mat2 = [
                [ -1, -2 ],
                [ -3, -4 ]
            ];
            const b: Mat2 = [
                [ -5, -6 ],
                [ -8, -7 ]
            ];
            const result = add(a, b);

            const expected: Mat2 = [
                [ -6,  -8  ],
                [ -11, -11 ]
            ];

            expect(result).toEqual(expected);
        });

        it("should correctly add an empty (all-zero) matrix", () =>
        {
            const a: Mat2 = [
                [ 1, 2 ],
                [ 3, 4 ]
            ];
            const b: Mat2 = [
                [ 0, 0 ],
                [ 0, 0 ]
            ];
            const result = add(a, b);

            expect(result).toEqual(a);
        });
    });
    
});
