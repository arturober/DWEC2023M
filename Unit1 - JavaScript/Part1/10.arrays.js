"use strict";

const words = ["dog", "wardrobe", "cat", "apple", "mouse"]; 
words.sort();
console.log(words.toString()); // apple,cat,dog,mouse,wardrobe
words.reverse();
console.log(words.toString()); // wardrobe,mouse,dog,cat,apple

const nums = [4, 12, 293, 87, 5, 10];
nums.sort();
console.log(nums.toString()); // 10,12,293,4,5,87
nums.sort((n1, n2) => n1 - n2);
console.log(nums.toString()); // 4,5,10,12,87,293

const people = [
    {
        name: "Peter",
        age: 34
    },
    {
        name: "Jane",
        age: 14
    },
    {
        name: "John",
        age: 29
    },
    {
        name: "Abbie",
        age: 45
    }
];

people.sort((p1, p2) => p1.age - p2.age); // Order by age
console.log(people);
people.sort((p1, p2) => p1.name.localeCompare(p2.name)); // Order by name
console.log(people);

// New methods ES2023 (Don't modify the original array)
const words2 = ["dog", "wardrobe", "cat", "apple", "mouse"]; 
const sortedWords = words2.toSorted();
console.log(words2.toString()); // dog,wardrobe,cat,apple,mouse (not modified!)
console.log(sortedWords.toString()); // apple,cat,dog,mouse,wardrobe

const reversedWords = sortedWords.toReversed();
console.log(reversedWords.toString());