import { BuildTuple } from "./BuildTuple";
import { Length } from "./Length";

export type Subtract<A extends number, B extends number> = 
    BuildTuple<A> extends [...(infer U), ...BuildTuple<B>]
        ? Length<U>
        : never;
