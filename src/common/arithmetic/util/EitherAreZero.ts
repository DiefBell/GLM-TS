export type EitherAreZero<A extends number, B extends number> = 
    A extends 0
        ? true
        : (B extends 0 ? true : false);
