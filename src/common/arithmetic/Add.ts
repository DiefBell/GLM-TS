import { BuildTuple } from "./util/BuildTuple";
import { Length } from "./util/Length";

export type Add<A extends number, B extends number> = 
    Length<[...BuildTuple<A>, ...BuildTuple<B>]>;
