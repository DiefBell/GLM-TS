import { magnitude } from "./magnitude";
import { Vector } from "./types/Vector";

describe("The Vector Magnitude function", () =>
{
    it("Correctly calculates the magnitude of a 2D vector", () =>
    {
        const vecA: Vector<2> = [ 3, 5 ];
        const magA = magnitude(vecA);
        expect(magA).toEqual(Math.sqrt(34));

        const vecUnit: Vector<2> = [ Math.sqrt(0.5), Math.sqrt(0.5) ];
        const magUnit = magnitude(vecUnit);
        expect(magUnit).toEqual(1);
    });

    it("Correctly calculated the magnitude of a 3D vector", () =>
    {
        const vecA: Vector<3> = [ 1, 2, 3 ];
        const magA = magnitude(vecA);
        expect(magA).toEqual(Math.sqrt(14));

        const vecD: Vector<3> = [ -1, -2, -3 ];
        const magD = magnitude(vecD);
        expect(magD).toEqual(Math.sqrt(14));

        const vecB: Vector<3> = [ 0, 0, 0 ];
        const magB = magnitude(vecB);
        expect(magB).toEqual(0);

        const vecC: Vector<3> = [ 1, 1, 1 ];
        const magC = magnitude(vecC);
        expect(magC).toEqual(Math.sqrt(3));

        const vecUnit: Vector<3> = [ Math.sqrt(1/3), Math.sqrt(1/3), Math.sqrt(1/3) ];
        const magUnit = magnitude(vecUnit);
        expect(magUnit).toEqual(1);
    });
});
