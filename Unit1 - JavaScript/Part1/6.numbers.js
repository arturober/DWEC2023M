"use strict";

console.log((4.435983754).toFixed(2)); // 4.44

console.log(Number.MIN_VALUE); // Prints 5e-324 (smallest number)
console.log(Number.MAX_VALUE); // Prints 1.7976931348623157e+308 (biggest number)

console.log(Number.MAX_VALUE * 2); // Infinity

console.log(Number.parseInt("43.34")); // 43

let n1 = "2";
let n2 = "4";
let n3 = "asd";

console.log(n1 * n2); // 8
console.log(n1 * n3); // NaN
const res = n1 * n3;
console.log(Number.isNaN(res)); // true
