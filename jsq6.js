function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    };
}

function compose(...fns) {
    return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

const counter = createCounter();
const double = x => x * 2;
const addOne = x => x + 1;

const incrementAndProcess = compose(double, addOne, counter.increment);

counter.increment();
const result = incrementAndProcess();
console.log(result);