import { Vector } from "../vector/types/Vector";
import { fromAxisAngle } from "./fromAxisAngle";
import { Quaternion } from "./types/Quaternion";

describe("Quaternion fromAxisAngle function", () =>
{
    it("create correct quaternion from 90 degree rotation about the Y axis", () =>
    {
        const axis: Vector<3> = [ 0, 1, 0 ];
        const angle = 90 * Math.PI / 180;

        const result = fromAxisAngle(axis, angle);

        const expected: Quaternion = [
            0,
            0.7071068,
            0,
            0.7071068
        ];

        expect(result[0]).toBeCloseTo(expected[0]);
        expect(result[1]).toBeCloseTo(expected[1]);
        expect(result[2]).toBeCloseTo(expected[2]);
        expect(result[3]).toBeCloseTo(expected[3]);
    });
});
