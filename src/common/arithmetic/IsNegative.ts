export type IsNegative<N extends number> = 
    `${N}` extends `-${number}` ? true : false;
