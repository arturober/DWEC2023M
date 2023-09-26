"use strict";

const form = document.getElementById("formId");

console.log(form);
console.log(form.childNodes); // Includes text nodes
console.log(form.children); // Includes only HTML elements

Array.from(form.children).forEach(p => console.log(p));

// Access first input
form.children[0].children[0].children[0].value = "Value";
form.firstElementChild.firstElementChild.firstElementChild.value = "Value 2";
form.nombre.value = "Value 3"; // We can access a input from a form using the name

// Select all form inputs
console.log(form.getElementsByTagName("input"));

// Same from document
console.log(document.querySelectorAll("#formId input"));

// Iterate through paragraphs
let p = form.firstChild;
do {
    console.log(p);
} while(p = p.nextElementSibling)

document.querySelector("title").innerText = "Changed!"