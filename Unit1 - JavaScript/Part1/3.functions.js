"use strict";

function changeNum(n) {
    n = 99;
}

let n = 1;
changeNum(n);
console.log(n); // 

function changeArray(array) {
    array[0] = 999;
}

let a = [1,2,3,4,5];
changeArray(a);
console.log(a.toString()); // 999,2,3,4,5
