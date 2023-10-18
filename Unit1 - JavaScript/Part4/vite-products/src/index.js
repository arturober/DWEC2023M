import { ProductService } from "./product-service.js";
import dayjs from "dayjs";

const productService = new ProductService();
const tbody = document.querySelector("#tabla tbody");

async function deleteProd(e) {
    try {
        await productService.delete(e.target.dataset.id);
        e.target.closest("tr").remove();
    } catch(error) {
        console.error("No se pudo borrar: " + error);
    }
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
        // new Intl.DateTimeFormat("en-US", {
        //     day: "numeric",
        //     month: "long",
        //     year: "numeric",
        //     hour: "numeric",
        //     minute: "numeric",
        //     hourCycle: "h12",
        // }).format(new Date(product.available))
        dayjs(product.available).format("DD/MM/YYYY")
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

async function getProducts() {
    const products = await productService.getAll();
    products.forEach((p) => showProduct(p));
}

getProducts();

