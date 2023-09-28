"use strict";

const form = document.getElementById("form");
const imgPreview = document.getElementById("imgPreview");
const list = document.getElementById("list");

form.image.addEventListener("change", (e) => {
  let file = e.target.files[0];
  let reader = new FileReader();
  if (file) reader.readAsDataURL(file); // Serialize to base64
  reader.addEventListener("load", (e) => {
    // Serialization completed
    imgPreview.src = reader.result; // Data in Base64
  });
});

form.addEventListener("submit", e => {
    e.preventDefault();

    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = imgPreview.src;
    li.append(img, form.description.value);
    list.append(li);
    form.reset(); // Empty the form
    imgPreview.src = "";
});
