"use strict";

let s1 = "This is a string";
// Get the length of a string
console.log(s1.length); // Prints 16
// Get the character a position of the string (starting at 0)
console.log(s1.charAt(0)); // Prints "T"
console.log(s1[0]); // Prints "T"

console.log(s1.indexOf("s")); // 3
console.log(s1.indexOf("s", 4)); // 6
console.log(s1.indexOf("s", 7)); // 10
console.log(s1.indexOf("s", 11)); // -1 (not found)

// Same as slice
console.log(s1.substring(5, 7)); // Prints "is"
console.log(s1.substring(5)); // "is a string"
console.log(s1.slice(5, -3)); // "is a str"

console.log(s1.substr(5, 2)); // "is" (deprecated)

const email = "pepito.perez@gmail.com";
const usuario = email.substring(0, email.indexOf("@"));
console.log(usuario);

let postCode = "12";
console.log(postCode.padStart(5)); // "   12"
console.log(postCode.padStart(5, "0")); // "00012"

let uString = "Unicode astral plane: \u{1f3c4}";
console.log(uString); // Prints "Unicode astral plane: 🏄" (surfer icon)
console.log("\u{1F618}"); // 😘
console.log("😘");

let uString2 = "\u{1f30a}\u{1f3c4}\u{1f40b}"; // THREE characters:
console.log(uString2, uString2.length); // 6
console.log(Array.from(uString2).length); // 3

const numero = 0;
if (!numero) {
  console.log("Number is not valid");
}

