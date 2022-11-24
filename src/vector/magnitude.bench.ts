import { magnitude } from "./magnitude";
import type { Vector } from "./types/Vector";

const xStarStarTwo = <D extends number>(vec: Vector<D>) =>
{
    let radicand = 0;

    vec.forEach(
        (val: number) => radicand += val ** 2
    );

    return Math.sqrt(radicand);
};

const xStarX = <D extends number>(vec: Vector<D>) =>
{
    let radicand = 0;

    vec.forEach(
        (val: number) => radicand += val * val
    );

    return Math.sqrt(radicand);
};

const reduce = <D extends number>(vec: Vector<D>) =>
{
    return vec.reduce((curr, next) => curr + Math.pow(next, 2));
};

const reduceXStarStarTwo = <D extends number>(vec: Vector<D>) =>
{
    return vec.reduce((curr, next) => curr + next ** 2);
};

const reduceXStarX = <D extends number>(vec: Vector<D>) =>
{
    return vec.reduce((curr, next) => curr + next * next);
};


const variants: Record<string, typeof magnitude> = {
    "Current implementation": magnitude,
    "Double asterisk squaring": xStarStarTwo,
    "Multiply by self squaring": xStarX,
    "Using reduce instead of forEach": reduce,
    "Using reduce with double asterisk": reduceXStarStarTwo,
    "Using reduce with self squaring": reduceXStarX
};


const TIME = 10000;

export const benchmark = () =>
{
    const coldStart = () =>
    {
        const start = performance.now();
        let timer = 0;

        for(; timer < TIME; timer = performance.now() - start)
        {
            magnitude([ 1, 2, 3 ]);
            xStarStarTwo([ 1, 2, 3 ]);
            xStarX([ 1, 2, 3 ]);
            reduce([ 1, 2, 3 ]);
            reduceXStarStarTwo([ 1, 2, 3 ]);
            reduceXStarX([ 1, 2, 3 ]);
        }

        console.log("\nCompleted cold run\nStarting benchmarks...\n");
    };
    coldStart();

    Object.entries(variants).sort(() => (Math.random() > 0.5) ? 1 : -1).forEach(
        ([name, variantFunction]) =>
        {
            let count = 0;
            const start = performance.now();
            let timer = 0;

            for(; timer < TIME; timer = performance.now() - start)
            {
                variantFunction([ 1, 2, 3 ]);
                variantFunction([ 0, 0, 0 ]);
                variantFunction([ 1, 1, 1 ]);
                variantFunction([ -1, -2, -3 ]);
                count++;
            }

            // console.log(`${name} achieved ${count.toLocaleString()} runs in ${TIME} ms.`);
            console.log(`${name} averaged ${(count/timer).toLocaleString()} runs per ms`);
        }
    );
};
benchmark();
