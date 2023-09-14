"use strict";

//n = 99; // 2.variables.js:3 Uncaught ReferenceError: n is not defined 

let v = 1;

console.log(typeof v);

v = "Hello";

console.log(typeof v);

function suma(n1,n2) {
    if(typeof n1 !== "number" || typeof n2 !== "number") {
        console.error("Parameters are not numbers");
        return 0;
    }
    return n1 + n2;
}

let res = suma("34", "24");
console.log(res);
res = suma(true, false);
console.log(res);
res = suma("Hola", "Pepe");
console.log(res);
res = suma(12, 24);
console.log(res);

const c = "Hello";
//c = "13"; // 2.variables.js:31 Uncaught TypeError: Assignment to constant variable.

const a = [];
a[0] = 23;
a[1] = 24;
a[0] = 65;
console.log(a); // [65, 24]