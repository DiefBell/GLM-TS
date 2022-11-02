import { MultiAdd } from "./util/MultiAdd";

export type Multiply<A extends number, B extends number> = 
    MultiAdd<A, 0, B>;
