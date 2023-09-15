"use strict";

function changeNum(n) {
    n = 99;
}

let n = 1;
changeNum(n);
console.log(n); // 1

function changeArray(array) {
    array[0] = 999;
}

let a = [1,2,3,4,5];
changeArray(a);
console.log(a.toString()); // 999,2,3,4,5

function suma(n1, n2) {
    // if(! (n1 instanceof Number) || ! (n2 instanceof Number)) {
    //     throw Error("Parameters must be numbers!");
    // }
    return n1 + n2;
}

console.log(suma(2,6)); // 8
console.log(suma("2", "6")); // 26
console.log(suma(true, false)); // 1
console.log(suma()); // NaN (undefined + undefined)
console.log(suma("Hello")); // Helloundefined
console.log(suma(1,2,3,4,5,6)); // 3 (1+2)

let resta = function(n1, n2) {
    return n1 - n2;
};

console.log(resta(7, 2));