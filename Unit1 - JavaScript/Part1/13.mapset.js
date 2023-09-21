"use strict";

const productMap = new Map();

productMap.set("apple", 1.25);
productMap.set("melon", 3);
productMap.set("pear", 1.1);

console.log(productMap.has("apple")); // true
console.log(productMap.get("apple")); // 1.25
console.log(productMap.delete("apple")); // true

for (let entry of productMap) {
  console.log(`${entry[0]} - ${entry[1]}`);
}

for (let [product, price] of productMap) {
  console.log(`${product} - ${price}`);
}

productMap.forEach((price, product) => console.log(`${product} - ${price}`));

console.log(productMap);

const productSet = new Set();
productSet.add("apple");
productSet.add("melon");
productSet.add("pear");

console.log(productSet.has("melon")); // true
productSet.delete("apple");

productSet.forEach((product) => console.log(product));

const numSet = new Set([1,2,3,1,2,3,1,2,3]);
console.log(numSet); // {1, 2, 3}
const array = Array.from(numSet);
const array2 = [...numSet];
console.log(array); // [1,2,3]
console.log(array2); // [1,2,3]
