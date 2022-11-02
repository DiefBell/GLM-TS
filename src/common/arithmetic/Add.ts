import { BuildTuple } from "./BuildTuple";
import { Length } from "./Length";

export type Add<A extends number, B extends number> = 
    Length<[...BuildTuple<A>, ...BuildTuple<B>]>;
