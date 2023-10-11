"use strict";

const tbody = document.querySelector("#tabla tbody");
const form = document.getElementById("formProduct");
const imgPreview = document.getElementById("imgPreview");

function deleteProd(e) {
  fetch(
    `https://api.fullstackpro.es/products-example/products/${e.target.dataset.id}`,
    { method: "DELETE" }
  ).then((resp) => {
    if(resp.status !== 204) throw Error("Error deleting product. Code: " + resp.status)
    e.target.closest("tr").remove();
  })
  .catch((e) => console.error(e.message));
}

function showProduct(product) {
  const tr = document.createElement("tr");
  const tdImage = document.createElement("td");
  const img = document.createElement("img");
  img.src = product.imageUrl;
  tdImage.append(img);

  const tdDesc = document.createElement("td");
  tdDesc.append(product.description);

  const tdPrice = document.createElement("td");
  tdPrice.append(
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(product.price)
  );

  const tdAvail = document.createElement("td");
  tdAvail.append(
    new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h12",
    }).format(new Date(product.available))
  );

  const tdDel = document.createElement("td");
  const btnDel = document.createElement("button");
  btnDel.append("X");
  btnDel.classList.add("btn", "btn-danger");
  btnDel.dataset.id = product.id;
  tdDel.append(btnDel);

  btnDel.addEventListener("click", deleteProd);

  tr.append(tdImage, tdDesc, tdPrice, tdAvail, tdDel);
  tbody.append(tr);
}

fetch("https://api.fullstackpro.es/products-example/products")
  .then((resp) => resp.json())
  .then((json) => json.products.forEach((p) => showProduct(p)));

form.fileName.addEventListener("change", e => {
  const file = form.fileName.files[0];
  if(file) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", e => {
      imgPreview.src = fileReader.result;
    });
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();

  const product = {
    description: form.description.value,
    price: +form.price.value,
    imageUrl: imgPreview.src
  };

  fetch('https://api.fullstackpro.es/products-example/products', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  }).then(resp => resp.json())
  .then(json => {
    showProduct(json.product);
    form.reset();
    imgPreview.src = "";
  });
});
