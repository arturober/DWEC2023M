"use strict";

const testInput = document.getElementById("test");
const testInput2 = document.getElementById("test2");
const testInput3 = document.getElementById("test3");

testInput.addEventListener("keypress", e => {
    testInput.nextElementSibling.innerText = e.key;
});

testInput2.addEventListener("select", e => {
    const selectedText = testInput2.value.substring(testInput2.selectionStart, testInput2.selectionEnd);
    testInput2.nextElementSibling.innerText = selectedText;
});

testInput3.addEventListener("input", e => {
    testInput3.value = testInput3.value.toLocaleUpperCase();
});

