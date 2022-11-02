export type BuildTuple<L extends number, T extends unknown[] = []> = 
    T extends { length: L } ? T : BuildTuple<L, [...T, unknown]>;
