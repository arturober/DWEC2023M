"use strict";

const o1 = {a: 12, b: "Bye"};
const o2 = {b: "Hello"};
const o3 = {...o1, ...o2, c: 56};
console.log(o3);