import { BuildTuple } from "./util/BuildTuple";
import { Length } from "./util/Length";

export type Subtract<A extends number, B extends number> = 
    BuildTuple<A> extends [...(infer U), ...BuildTuple<B>]
        ? Length<U>
        : never;
