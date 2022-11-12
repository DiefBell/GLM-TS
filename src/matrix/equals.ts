import { Matrix } from "./types/Matrix";
import { Equal } from "../common/arithmetic";

type MatricesIncompatibleError<R1 extends number, C1 extends number, R2 extends number, C2 extends number> =
    `Cannot compare equality between matrix with dimensions ${R1}x${C1} and matrix with dimensions ${R2}x${C2}. They must have the same dimensions!`;

/**
 * Tests whether all the elements in matrix 'a' are equal
 * to their corresponding elements in matrix 'b'.
 * 
 * @param a First matrix
 * @param b Second matrix
 * 
 * @returns 'true' if matrices are equal, 'false' otherwise.
 */
export const equals = <
    R1 extends number, // should create a type for positive numbers
    C1 extends number,
    R2 extends number,
    C2 extends number
>
(
    a: Equal<R1, R2> extends true ? Equal<C1, C2> extends true ? Matrix<R1, C1> : never : never,
    b: Equal<R1, R2> extends true ? Equal<C1, C2> extends true ? Matrix<R2, C2> : never : never,
)
: Equal<R1, R2> extends true
    ? Equal<C1, C2> extends true
        ? boolean
        : MatricesIncompatibleError<R1, C1, R2, C2>
    : MatricesIncompatibleError<R1, C1, R2, C2> =>
{
    const rows = a.length;
    const cols = a[0].length;

    for(let row = 0; row < rows; row++)
    {
        for(let col = 0; col < cols; col++)
        {
            if(a[row][col] !== b[row][col])
                // @ts-ignore
                return false;
        }
    }

    // @ts-ignore
    return true;
};

// const a: Matrix<1, 2> = [
//     [ 1, 2 ]
// ];
// const b: Matrix<2, 3> = [
//     [ 6, 5, 4 ],
//     [ 3, 2, 1 ]
// ];

// const shouldntWork = equals(a, b);
