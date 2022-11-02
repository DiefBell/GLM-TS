import { LessThan } from "./LessThan";
import { Subtract } from "./Subtract";

export type Modulo<A extends number, B extends number> = 
    LessThan<A, B> extends true ? A : Modulo<Subtract<A, B>, B>;
