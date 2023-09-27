"use strict";

const img = document.querySelector("#img");

img.addEventListener("mouseenter", e => {
    img.src = "img/img2.webp";
});

img.addEventListener("mouseleave", e => {
    img.src = "img/img1.webp";
});

const div2 = document.createElement("div");
div2.classList.add("c1", "green");
div2.append("I'm a div");
document.body.append(div2);

const divs = document.querySelectorAll("div.c1");
divs.forEach(div => div.addEventListener("click", e => {
    div.classList.toggle("green");
}));