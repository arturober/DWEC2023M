"use strict";



// First td of each row (tr) which also has the .c1 class
const firstTdRows = document.querySelectorAll("#table tr td.c1:first-child");
firstTdRows.forEach(td => td.style.backgroundColor = "green");

// Td which are not the first one in each row
const tds = document.querySelectorAll("#table tr td:first-child ~ td");
tds.forEach(td => td.style.backgroundColor = "yellow");

const td = document.querySelector("#table td.c2");
td.style.backgroundColor = "red";

const tds2 = document.querySelectorAll("#table tr:nth-child(2n)");
tds2.forEach(td => td.style.color = "white");



