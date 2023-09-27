"use strict";

const div = document.querySelector("div.c1");

div.addEventListener("mousemove", e => {
    div.innerText = `${e.clientX - div.offsetLeft}, ${e.clientY - div.offsetTop}`;
});