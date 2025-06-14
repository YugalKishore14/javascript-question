function task1() {
    console.log('A');
    setTimeout(() => console.log('B'), 0);
    Promise.resolve().then(() => console.log('C'));
    Promise.resolve().then(() => setTimeout(() => console.log('D'), 0));
    Promise.resolve().then(() => console.log('E'));
    setTimeout(() => console.log('F'), 0);
    console.log('G');
}

task1();
// What is the order of the console output?