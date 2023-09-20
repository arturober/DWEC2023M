"use strict";

const a = new Array(12);
console.log(a.length); // 12
a[20] = 34;
console.log(a.length); // 21
console.log(a.toString()); // ,,,,,,,,,,,,,,,,,,,,34

const a2 = new Array("a", "b", "c", "d", "e"); // Array with 5 values
console.log(a2.toString()); // ['a', 'b', 'c', 'd', 'e']
a2.length = 2;
console.log(a2.toString()); // ['a', 'b']

const nums = [50];
console.log(nums.length); // 1

const words = ["house", "tree", "car", "dog"];

for (let i in words) {
  // i is the index
  console.log(`${i} -> ${words[i]}`);
}

for (let w of words) {
  // foreach equivalent
  console.log(w);
}

console.log("-------- words.forEach -------");
words.forEach((w) => console.log(w));

console.log("------ Iterate through a string ------");
const sentence = "My car is blue";
Array.from(sentence).forEach(c => console.log(c))

console.log("------ Iterate through a string 2 ------");
for(let c of sentence) {
    console.log(c);
}
