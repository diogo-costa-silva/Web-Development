
// Create the map
let myMap = L.map("map").setView([41.558697, -8.397743], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    // Attribution is obligatory as per copyright!
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);



// Markers

// Budapest, Hungary
let bud_marker = L.marker([47.503280, 19.045010]).addTo(myMap);
// Cape Town, South Africa
let cpt_marker = L.marker([-33.909396, 18.418033]).addTo(myMap);
// Vigo, Spain
let vgo_marker = L.marker([42.239932, -8.717004]).addTo(myMap);
// London, England
let lon_marker = L.marker([51.49992826360607, -0.12151727199458447]).addTo(myMap);

// Munich, Germany

// Monaco, France

// Maputo, Mozambique







// Circles

let wembley_stadium = L.circle([51.5563172938567, -0.2797198418430719], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: "0.5",
    radius: 1500
}).addTo(myMap);











// Polygons

let geres = L.polygon([
    [41.68474696021805, -8.176507877778803],
    [41.82703813533221, -8.313586949693171],
    [41.87057395517334, -8.107968341983547],
    [41.782680317896826, -7.960794299315969]],
    {
        color: "green",
        fillColor: "#36ba40",
        fillOpacity: "0.5",
    }
).addTo(myMap);








// Popups

//for cities
bud_marker.bindPopup("<b>Budapest, Hungary</b><br>The Queen of the Danube");
cpt_marker.bindPopup("<b>Cape Town, South Africa</b><br>");
vgo_marker.bindPopup("<b>Vigo, Spain</b><br>The working city of Galicia!");
lon_marker.bindPopup("<b>London, England</b><br>The center of the world!");

//for locations
wembley_stadium.bindPopup("<b>Wembley Stadium</b>");
geres.bindPopup("<b>Geres</b>");








// how to use an alert

/*
function onMapClick(e) {
    alert("The coordenates of this place are " + e.latlng);
    // alert("You clicked the map at " + e.latlng);
}

myMap.on('click', onMapClick); */