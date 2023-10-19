import { MyGeolocation } from "./myGeolocation";

const API_KEY = "An8JNymYeoGzMUqXfVJlMm_9CLeMcpx_5NB0N1G9cUEUxIadv7XX5zVc008au1N1";

async function showStaticMap() {
  const coords = await MyGeolocation.getGeolocation();
  const latlon = coords.latitude + "," + coords.longitude;

  const imgUrl = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${latlon}/15?mapSize=600,300&pp=${latlon};66&mapLayer=Basemap,Buildings&key=${API_KEY}`;
  document.getElementById("imgMap").src = imgUrl;
}

showStaticMap();
