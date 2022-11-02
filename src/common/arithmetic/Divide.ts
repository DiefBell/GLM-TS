import { MultiSub } from "./util/MultiSub";

export type Divide<A extends number, B extends number> = 
    MultiSub<A, B, 0>;
