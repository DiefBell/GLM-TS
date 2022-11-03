export type IsWhole<N extends number> = 
    `${N}` extends `${number}.${number}` ? false : true;
