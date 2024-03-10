const prompt = require("prompt-sync")();
const num = prompt("Enter The Number = ");
let rem = num;
let num1 = Math.trunc(num / 1000);
console.log(num1);
num1 = Math.trunc(num / 100);
console.log(num1);
num1 = Math.trunc(num / 10);
console.log(num1);
console.log(rem);

// console.log(rem);
// let num1 = Math.trunc(num / 10);
// console.log(num1);
// num1 = Math.trunc(num / 100);
// console.log(num1);
// num1 = Math.trunc(num / 1000);
// console.log(num1);
