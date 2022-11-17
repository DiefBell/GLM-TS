import { IFov, perspectiveFromFov } from "./perspectiveFromFov";
import { Matrix } from "./types/Matrix";

describe("Matrix perspectiveFromFov function", () =>
{
    it("works", () =>
    {
        const fov: IFov = {
            upRads: 30 * Math.PI / 180.0,
            downRads: 30 * Math.PI / 180.0,
            leftRads: 50 * Math.PI / 180.0,
            rightRads: 50 * Math.PI / 180.0
        };
        const nearClippingPlane = 0.1;
        const farClippingPlane = 100.0;

        const perpsectiveMatrix = perspectiveFromFov(fov, nearClippingPlane, farClippingPlane);

        const expected: Matrix<4, 4> = [
            [ 0.83909963117728, 0, 0, 0 ],
            [ 0, 1.7320508075688774, 0, 0 ],
            [ 0, 0, -1.0010010010010009, -0.10010010010010009 ],
            [ 0, 0, -1, 0 ]
        ];
        
        perpsectiveMatrix.forEach(
            (row, rowIndex) =>
            {
                row.forEach(
                    (val, colIndex) =>
                    {
                        expect(val).toBeCloseTo(expected[rowIndex][colIndex], 10);
                    }
                );
            }
        );
    });
});
