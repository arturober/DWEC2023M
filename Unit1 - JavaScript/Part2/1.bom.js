"use strict";

console.log(navigator.userAgent); // Prints browser information
navigator.geolocation.getCurrentPosition((position) => {
  console.log(
    "Latitude: " +
      position.coords.latitude +
      ", Longitude: " +
      position.coords.longitude
  );
});

var hola = "hola";
console.log(window.hola); // "Hola" let doesn't work like this!!
