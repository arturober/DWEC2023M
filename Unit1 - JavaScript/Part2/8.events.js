"use strict";

const div = document.querySelector("div.c1");

div.addEventListener("mousemove", e => {
    div.innerText = `${e.clientX - div.offsetLeft}, ${e.clientY - div.offsetTop}`;
});

document.getElementById("google").addEventListener("click", e => e.preventDefault());

function clickTd(e) {
    e.target.classList.toggle("green");
    if(e.ctrlKey) {
        e.target.classList.toggle("selected");
    }
}

const tds = document.querySelectorAll("#tabla td");
tds.forEach(td => {
    td.addEventListener("click", clickTd);
    // td.addEventListener("click", e => td.classList.toggle("green"));
});
