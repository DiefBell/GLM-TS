export type Length<T extends unknown[]> = 
    T extends { length: infer L } ? L : never;
