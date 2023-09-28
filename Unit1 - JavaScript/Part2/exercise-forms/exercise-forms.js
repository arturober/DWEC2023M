"use strict";

let form = document.getElementById("form1");
let imgPreview = document.getElementById("imgPreview");
let tBody = document.querySelector("tbody");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(
    Array.from(form.hobbies)
      .filter((input) => input.checked)
      .map((input) => input.value)
      .join(", ")
  );
});
