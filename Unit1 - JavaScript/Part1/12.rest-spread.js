function getAverageMark(...marks) {
    console.log(marks.toString()); // Prints [5, 7, 8.5, 6.75, 9] (it's an array)
    let total = marks.reduce((total,mark) => total + mark, 0);
    return total / marks.length;
}
    
console.log(getAverageMark(5, 7, 8.5, 6.75, 9)); // Prints 7.25
console.log(getAverageMark()); // Prints NaN (0/0)
console.log(getAverageMark(8)); // Prints 8
    
let nums = [12, 32, 6, 8, 23];
console.log(Math.max(nums)); // Prints NaN (array is not valid)
console.log(Math.max(...nums)); // 32

const nums2 = [1,2,3,4];
const nums3 = [5,6,7,8];

const nums4 = [...nums2]; // array2 clone
const nums5 = [...nums2, ...nums3, 9, 10]; // concat 
console.log(nums5.toString()); // 1,2,3,4,5,6,7,8,9,10

// Array destructuring
let array = [150, 400, 780, 1500, 200];
let [n1, n2, n3] = array;
console.log(n3); // 780

let s = "Hello world";
let [c1,c2,c3] = s;
console.log(c1,c2,c3); // H e l

function printArea([width, height]) {
    console.log(`Area: ${width * height}`);
}

const rect = [4, 7];
printArea(rect);



