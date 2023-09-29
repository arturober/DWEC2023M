"use strict";

const list = document.getElementById("list");
const descInput = document.getElementById("description");
const lastBtn = document.getElementById("addLast");
const firstBtn = document.getElementById("addFirst");
const afterBtn = document.getElementById("addAfter");
const clearBtn = document.getElementById("clear");

firstBtn.addEventListener("click", e => {
    list.innerHTML = `<li>${descInput.value}</li>${list.innerHTML}`;
    // const li = document.createElement("li");
    // li.append(descInput.value);
    // list.prepend(li);
    descInput.value = "";
});

lastBtn.addEventListener("click", e => {
    const li = document.createElement("li");
    li.append(descInput.value);
    list.append(li);
    descInput.value = "";
});

afterBtn.addEventListener("click", e => {
    const li = document.createElement("li");
    li.append(descInput.value);
    const child = list.children[+document.getElementById("position").value];
    child.after(li);
    descInput.value = "";
});

clearBtn.addEventListener("click", e => {
    list.replaceChildren();
});

