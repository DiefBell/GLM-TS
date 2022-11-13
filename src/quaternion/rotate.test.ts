import { Vector } from "../vector/types/Vector";
import { rotate } from "./rotate";
import { Quaternion } from "./types/Quaternion";

describe("Quaternion rotation function", () =>
{
    it("correctly rotates a 3D unit vector", () =>
    {

    });

    it("correctly rotates a zero vector", () =>
    {

    });

    it("correctly rotates a 1-1-1 vector by 90 degrees about the y axis", () =>
    {
        const vec: Vector<3> = [ 1, 1, 1 ];
        const q: Quaternion = [
            0,
            0.7071068,
            0,
            0.7071068
        ];

        const result = rotate(vec, q);
        
        expect(result[0]).toBeCloseTo(-1);
        expect(result[1]).toBeCloseTo(1);
        expect(result[1]).toBeCloseTo(1);
    });

    // "non-trivial" probably isn't the right term but idk what else to call it
    it("correctly rotates a non-trivial vector", () =>
    {

    });
});
