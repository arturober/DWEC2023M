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

const div3 = document.createElement("div");
div3.append("A div with no click event");
div3.style.color = "white";
div3.style.backgroundColor = "green";
div3.style.width = "100px";
div3.style.height = "100px";
document.body.append(div3);