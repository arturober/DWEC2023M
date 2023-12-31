import { ProductService } from "./product-service";

const productService = new ProductService();
const form = document.getElementById("formProduct");
const imgPreview = document.getElementById("imgPreview");

form.fileName.addEventListener("change", () => {
    const file = form.fileName.files[0];
    if(file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.addEventListener("load", () => {
            imgPreview.src = fileReader.result;
        });
    }
});
  
form.addEventListener("submit", async e => {
    e.preventDefault();
  
    const product = {
        description: form.description.value,
        price: +form.price.value,
        imageUrl: imgPreview.src
    };
  
    await productService.insert(product);
    location.assign("index.html");
});
  