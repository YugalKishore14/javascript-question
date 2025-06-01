function compose(...fun) {
    return function (x) {
        return fun.reduceRight((acc, fn) => fn(acc), x);
    };
}

const add = x => x + 10;
const multiply = x => x * 2;
const toString = x => `Result: ${x}`;

const compos = compose(toString, multiply, add);
console.log(compos(5));