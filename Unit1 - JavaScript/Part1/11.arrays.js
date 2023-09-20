"use strict";

const words = ["dog", "wardrobe", "cat", "apple", "mouse"]; 

console.log(words.indexOf("cat")); // 2
console.log(words.indexOf("car")); // -1
console.log(words.indexOf("cat", 3)); // -1 (not found)

const nums = [3, 21, 16, 61, 9, 54];
console.log(nums.every((n) => n < 100)); // true
console.log(nums.every((n) => n % 2 == 1)); // false

console.log(nums.some((n) => n % 2 == 0)); // true
console.log(nums.some((n) => n > 100)); // false

const even = nums.filter((n) => n % 2 == 0);
console.log(even.toString());

function doubleEvens(n) {
    if(n % 2 == 0) return n * 2;
    return n;
}

const double = nums.map((n) => n * 2);
console.log(double.toString()); // 6,42,32,122,18,108
const doubleEven = nums.map(doubleEvens);
console.log(doubleEven.toString()); // 3,21,32,61,9,108

const sum = nums.reduce((total, n) => total + n, 0);
console.log(sum); // 164
const max = nums.reduce((max, n) => Math.max(max, n));
console.log(max); // 61

// Find the first even number
console.log(nums.find((n) => n % 2 === 0)); // 16
console.log(nums.findIndex((n) => n % 2 === 0)); // 2