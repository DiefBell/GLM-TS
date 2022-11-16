import { identity } from "./identity";

describe("Quaternion identity constant function", () =>
{
    it("returns the idenity quaternion", () =>
    {
        expect(identity()).toEqual([ 0, 0, 0, 1 ]);
    });
});
