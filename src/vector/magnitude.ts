import { Vector } from "./types/Vector";

export const magnitude = <D extends number>(vec: Vector<D>) =>
{
    let radicand = 0;

    vec.forEach(
        (val: number) => radicand += Math.pow(val, 2)
    );

    return Math.sqrt(radicand);
};
