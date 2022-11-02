export type Equal<A extends number, B extends number> = 
    A extends B
        ? (B extends A ? true : false)
        : false;
