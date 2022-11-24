import { IFovAspectRatio, IFovAsymmetric, IFovSymmetric, perspectiveFromFov } from "./perspectiveFromFov";
import { Matrix } from "./types/Matrix";

describe("Matrix perspectiveFromFov function", () =>
{
    it("works for asymmetric fields of view", () =>
    {
        const fov: IFovAsymmetric = {
            type: "Field of View from four angles",
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

    it("works for symmetric fields of view", () =>
    {
        const fov: IFovSymmetric = {
            type: "Field of View from a vertical FOV angle and a horizontal FOV angle",
            verticalRads: 60 * Math.PI / 180,
            horizontalRads: 100 * Math.PI / 180
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

    it("works for fields of view using an aspect ratio", () =>
    {
        const fov: IFovAspectRatio = {
            type: "Field of View from a vertical FOV angle and an aspect ratio",
            verticalRads: 60 * Math.PI / 180,
            aspectRatio: 5/3
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
