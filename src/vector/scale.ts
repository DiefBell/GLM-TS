import { Vector } from "./types/Vector";

export const scale = <D extends number>(vec: Vector<D>, scaleFactor: number): Vector<D> =>
{
    return vec.map(
        (value: number) => value * scaleFactor
    ) as Vector<D>;
};
