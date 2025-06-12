const person = {
    name: 'Alice',
    greet() {
        return `Hello, I'm ${this.name}`;
    },
    farewell: () => `Goodbye from ${this.name}`
};

const greetFn = person.greet;
const farewellFn = person.farewell;

console.log(person.greet());
console.log(greetFn());
console.log(farewellFn());