import { Add } from "../Add";
import { Subtract } from "../Subtract";

export type MultiAdd<
    N extends number, // number to repeatedly add
    A extends number, // current value
    I extends number  // iteration count
>
= I extends 0 ? A : MultiAdd<N, Add<N, A>, Subtract<I, 1>>;
