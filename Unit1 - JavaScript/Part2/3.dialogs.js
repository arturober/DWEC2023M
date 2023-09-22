"use strict";

document.getElementById("alert").addEventListener("click", (e) => {
    alert("Hello world!");
});

document.getElementById("confirm").addEventListener("click", (e) => {
    const resp = confirm("Do you understand?");
    const p = document.getElementById("resp");
    p.innerText = resp ? "Good" : "I don't believe you";
});

document.getElementById("prompt").addEventListener("click", (e) => {
    const resp = prompt("Who are you?");
    const p = document.getElementById("resp2");
    p.innerText = resp;
});
