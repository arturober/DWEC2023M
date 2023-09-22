"use strict";


setTimeout(() => console.log("End"), 5000);
console.log("Start");

let num = 1;
const interval = setInterval(function() {
    console.log(num++);
    if(num > 10) {
        clearInterval(interval);
    }
}, 1000);
    