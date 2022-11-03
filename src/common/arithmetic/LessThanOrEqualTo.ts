import { Subtract } from "./Subtract";
import { EitherAreZero } from "./util/EitherAreZero";

export type LessThanOrEqualTo<A extends number, B extends number> =
    EitherAreZero<A, B> extends true
        ? (A extends 0 ? true : false)
        : LessThanOrEqualTo<Subtract<A, 1>, Subtract<B, 1>>;
