import { Add } from "../Add";
import { LessThan } from "../LessThan";
import { Subtract } from "../Subtract";

/**
 * takes a number N, a divisor D, and a quotient Q that represents how many times D has been subtracted from N on each iteration.
 * Once N becomes less than D, our subtraction stops and we return the Q number of times we recursed.
 */
export type MultiSub<
    N extends number,
    D extends number,
    Q extends number
>
= LessThan<N, D> extends true
    ? Q
    : MultiSub<Subtract<N, D>, D, Add<Q, 1>>;
