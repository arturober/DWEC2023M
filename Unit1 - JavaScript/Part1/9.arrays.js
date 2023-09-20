"use strict";

const a = [1,2,3];
a.push(4,5); 
console.log(a.toString()); // 1,2,3,4,5

a.unshift(-1, 0);
console.log(a.toString()); // -1,0,1,2,3,4,5

a.pop(); // Removes last value
console.log(a.toString()); // -1,0,1,2,3,4

a.shift(); // Removes first value
console.log(a.toString()); // 0,1,2,3,4

const nums1 = [1,2,3,4];
const nums2 = [5,6,7,8];
const nums3 = nums1.concat(nums2);
console.log(nums3.toString());
const nums4 = [...nums1, ...nums2];
console.log(nums4.toString());

console.log(nums3.slice(3, 7).join(";")); // 4;5;6;7

const letters = ["a", "b", "c", "d", "e"];
letters.splice(2, 1, "1", "2"); // Modifies original array
console.log(letters); // ['a', 'b', '1', '2', 'd', 'e']

const letters2 = ["a", "b", "c", "d", "e"];
const mod = letters2.toSpliced(2, 1, "1", "2"); // Returns a new array
console.log(mod);
