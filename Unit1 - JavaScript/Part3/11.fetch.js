"use strict";

fetch("https://api.fullstackpro.es/products-example/products")
    .then(resp => resp.json())
    .then(json => json.products.forEach(p => console.log(p)));