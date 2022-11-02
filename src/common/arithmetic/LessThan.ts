import { Equal } from "./Equal";
import { Subtract } from "./Subtract";
import { EitherAreZero } from "./util/EitherAreZero";

export type LessThan<A extends number, B extends number> =
    EitherAreZero<A, B> extends true
        ? Equal<A, B> extends true
            ? false
            : (A extends 0 ? true : false)
        : LessThan<Subtract<A, 1>, Subtract<B, 1>>;
