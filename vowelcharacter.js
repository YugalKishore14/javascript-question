const prompt = require("prompt-sync")();
const character = prompt("Enter the character = ");

if (
  character === "A" ||
  character === "a" ||
  character === "E" ||
  character === "e" ||
  character === "I" ||
  character === "i" ||
  character === "O" ||
  character === "o" ||
  character === "U" ||
  character === "u"
) {
  console.log("character is a vowel");
} else {
  console.log("character is not vowel");
}
