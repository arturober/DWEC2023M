import { MyGeolocation } from "./myGeolocation";

const API_KEY =
  "An8JNymYeoGzMUqXfVJlMm_9CLeMcpx_5NB0N1G9cUEUxIadv7XX5zVc008au1N1";

async function showStaticMap() {
  const coords = await MyGeolocation.getGeolocation();
  const latlon = coords.latitude + "," + coords.longitude;

  const imgUrl = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${latlon}/15?mapSize=600,300&pp=${latlon};66&mapLayer=Basemap,Buildings&key=${API_KEY}`;
  document.getElementById("imgMap").src = imgUrl;
}

showStaticMap();

function loadBingAPI() {
  const script = document.createElement("script");
  script.src = `https://www.bing.com/api/maps/mapcontrol?callback=showMap`;
  script.defer = true;
  document.body.append(script);
}

function createMarker(map, location, title, color = "blue") {
  const pin = new Microsoft.Maps.Pushpin(location, { title, color });
  map.entities.push(pin);
}

window.showMap = async () => {
  const coords = await MyGeolocation.getGeolocation();
  const center = new Microsoft.Maps.Location(coords.latitude, coords.longitude);

  const map = new Microsoft.Maps.Map(document.getElementById("map"), {
    credentials: API_KEY,
    center, // same as center: center
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 14,
  });

  Microsoft.Maps.Events.addHandler(map, "click", (e) => {
    createMarker(map, e.location, "");
    // map.setView({center: e.location});
  });

  createMarker(map, center, "You are here", "red");

  Microsoft.Maps.loadModule("Microsoft.Maps.AutoSuggest", () => {
    const manager = new Microsoft.Maps.AutosuggestManager({ map, businessSuggestions: true });
    manager.attachAutosuggest("#searchBox", "#searchBoxContainer", (result) => {
      createMarker(map, result.location, "", "green");
      map.setView({ center: result.location });
    });
  });
};

loadBingAPI();
