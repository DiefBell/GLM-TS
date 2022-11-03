export type IsDecimal<N extends number> = 
    `${N}` extends `${number}.${number}` ? true : false;
