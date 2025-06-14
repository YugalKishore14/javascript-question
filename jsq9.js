function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();

const result = [];
for (let i = 0; i < 4; i++) {
    result.push(fib.next().value);
}

const sum = result.reduce((total, num) => total + num, 0);
console.log(sum);