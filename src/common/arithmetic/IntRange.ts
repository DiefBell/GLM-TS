import { Enumerate } from "./util/Enumerate";

// https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range
export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
