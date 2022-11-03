export type IsPositive<N extends number> = 
    `${N}` extends `-${number}` ? false : true;
