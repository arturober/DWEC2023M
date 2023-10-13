import { Http } from "./http.class.js";

const http = new Http();
const list = document.getElementById("list");
const priceP = document.getElementById("price");

async function getCoins() {
    const coinList = await http.get("https://api.coingecko.com/api/v3/coins/list");
    coinList.forEach(coin => {
        const option = document.createElement("option");
        option.value = coin.id;
        option.append(coin.name);
        list.append(option);
    });
}

getCoins();

list.addEventListener("change", async e => {
    const id = list.value;
    const result = await http.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=eur`);
    priceP.textContent = result[id].eur + "€";
});