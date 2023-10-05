"use strict";

function sumaPromise(n1, n2) {
  if (n1 < 0 || n2 < 0) return Promise.reject("I can't sum negative numbers");

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(n1 + n2), 5000);
  });
}

function power2Promise(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(n ** 2), 3000);
  });
}

sumaPromise(3, 4)
  .then((res) => {
    console.log(`Primer then: ${res}`);
    return res * 2;
  })
  .then((res) => {
    console.log(`Segundo then: ${res}`);
  });

sumaPromise(6, 2)
  .then((res) => {
    console.log(`Sum: ${res}`);
    return power2Promise(res);
  })
  .then((pow) => console.log(`Power2: ${pow}`));

sumaPromise(3, -2)
  .then((res) => console.log(res))
  .catch((e) => console.error(e));
