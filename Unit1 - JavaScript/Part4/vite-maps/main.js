import { MyGeolocation } from "./myGeolocation";

async function showStaticMap() {
  const coords = await MyGeolocation.getGeolocation();
  
}
