import { Http } from "./http.class.js";

const http = new Http();
const form = document.getElementById("searchForm");
const resultP = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const q = form.search.value;
  const url = `https://api.weatherapi.com/v1/current.json?key=2ace799443da41d1a2272931231310&q=${q}&aqi=no`;
  const result = await http.get(url);
  console.log(result);
  const img = document.createElement("img");
  img.src = result.current.condition.icon;
  resultP.replaceChildren(
    img,
    result.location.name,
    ` (${result.current.condition.text})`,
    `. Temp: ${result.current.temp_c}ºC`
  );
});
