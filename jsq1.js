const prompt = require("prompt-sync")();
let age = prompt("Enter the your age");
if (age > 10 && age < 20) {
  console.log("your age 20 and 10");
} else {
  console.log("your age not 20 and 10");
}
console.log(age);

// for (let i=1;i<=100;i++) {
//     setTimeout(function(){
//         console.log(i);
//     },.1);
// }
