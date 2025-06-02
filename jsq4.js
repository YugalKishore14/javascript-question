function* counter() {
    let i = 1;
    while (true) {
        const reset = yield i++;
        if (reset) {
            i = 1;
        }
    }
}

const gen = counter();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next(true).value);
console.log(gen.next().value);