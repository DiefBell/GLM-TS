import { Subtract } from "../common/arithmetic/Subtract";
import { SquareMatrix } from "./SquareMatrix";

export const determinant = <L extends number>(mat: SquareMatrix<L>): number =>
{   
    const submatrix = <L extends number>(mat: SquareMatrix<L>, row: number, col: number): SquareMatrix<Subtract<L, 1>> =>
    {
        
    };
};

export const det = determinant;
