"use strict";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(8), 3000);
});

console.log(promise);
promise.then((res) => console.log(`Result: ${res}`));

function sumaPromise(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1 + n2), 5000);
    });
}

sumaPromise(4, 8).then(res => `4 + 8 = ${res}`);

