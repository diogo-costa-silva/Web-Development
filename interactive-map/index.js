
// Create the map
let myMap = L.map("map").setView([41.558697, -8.397743], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 9,
    // Attribution is obligatory as per copyright!
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);


// Geolocation
myMap.locate({setView: true, maxZoom: 16});



// function to add a marker in the detected location, showing accuracy in a popup
/* 
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(myMap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(myMap);
}

myMap.on('locationfound', onLocationFound);
*/

// function to show an error message if the geolocation failed
/*
function onLocationError(e) {
    alert(e.message);
}

myMap.on('locationerror', onLocationError);
*/


// ------- Markers -------


// Europe

// Vigo, Spain
let vigo_marker = L.marker([42.239932, -8.717004]).addTo(myMap);
// Madrid, Spain
let madrid_marker = L.marker([40.41723001099805, -3.683864902884245]).addTo(myMap);
// Barcelona, Spain
let barcelona_marker = L.marker([41.4045597865081, 2.1757405686042786]).addTo(myMap);
// Bilbao, Spain
let bilbao_marker = L.marker([43.26507222108919, -2.948499046740988]).addTo(myMap);
// Seville, Spain
let seville_marker = L.marker([37.406325272149566, -5.99924795910626]).addTo(myMap);
// Palma, Spain
let palma_marker = L.marker([39.33023060349886, 3.170561782280906]).addTo(myMap);

// Rome, Italy
let rome_marker = L.marker([41.89877819155034, 12.475235946063368]).addTo(myMap);
// Venice, Italy
let venice_marker = L.marker([45.44132813451034, 12.331571529573264]).addTo(myMap);
// Florence, Italy
let florence_marker = L.marker([43.77660633320009, 11.250065528257215]).addTo(myMap);
// Pisa, Italy
let pisa_marker = L.marker([43.723080518888615, 10.39662579039695]).addTo(myMap);

// Monaco, France
let monaco_marker = L.marker([43.735963750002604, 7.427218845810456]).addTo(myMap);

// Geneva, Switzerland
let geneva_marker = L.marker([46.20767920288144, 6.155871434547352]).addTo(myMap);
// Bern, Switzerland
let bern_marker = L.marker([46.94833252647823, 7.447899847306824]).addTo(myMap);

// Brussels, Belgium
let brussels_marker = L.marker([50.842069170053094, 4.362466282465136]).addTo(myMap);
// Antwerp, Belgium
let antwerp_marker = L.marker([51.23090521588889, 4.403591011693151]).addTo(myMap);

// Amsterdam, Netherlands
let amsterdam_marker = L.marker([52.36220992605644, 4.884968355112749]).addTo(myMap);

// Munich, Germany
let munich_marker = L.marker([48.13752921624638, 11.575491413759313]).addTo(myMap);

// Salzburg, Austria
let salzburg_marker = L.marker([47.810414066607976, 13.056944584508917]).addTo(myMap);

// London, England
let london_marker = L.marker([51.49992826360607, -0.12151727199458447]).addTo(myMap);

// Budapest, Hungary
let budapest_marker = L.marker([47.503280, 19.045010]).addTo(myMap);

// Antalya, Turkey
let antalya_marker = L.marker([36.897916999289976, 30.71535661988703]).addTo(myMap);
// Cappadocia, Turkey
let cappadocia_marker = L.marker([38.65999800835145, 34.87127208847199]).addTo(myMap);



// Asia

// Dubai, UAE
let dubai_marker = L.marker([25.211772255432095, 55.27108171408115]).addTo(myMap);


// Africa

// Maputo, Mozambique
let maputo_marker = L.marker([-25.980280291561016, 32.5937618872383]).addTo(myMap);
// Inhambane, Mozambique
let inhambane_marker = L.marker([-23.784341921968057, 35.499512149824305]).addTo(myMap);

// Cape Town, South Africa
let capetown_marker = L.marker([-33.909396, 18.418033]).addTo(myMap);
// Johannesburg, South Africa
let johannesburg_marker = L.marker([-26.203373744370776, 28.047056566882997]).addTo(myMap);
// Durban, South Africa
let durban_marker = L.marker([-29.84642262462299, 31.036886732667906]).addTo(myMap);
// Nelspruit, South Africa
let nelspruit_marker = L.marker([-25.46982816547604, 30.9805852582056]).addTo(myMap);




 
// ------- Circles -------

let wembley_stadium = L.circle([51.5563172938567, -0.2797198418430719], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: "0.5",
    radius: 1500
}).addTo(myMap);



// ------- Polygons -------

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



// ------- Popups -------


//for cities
budapest_marker.bindPopup("<b>Budapest, Hungary</b><br>The Queen of the Danube");
capetown_marker.bindPopup("<b>Cape Town, South Africa</b><br>");
vigo_marker.bindPopup("<b>Vigo, Spain</b><br>The working city of Galicia!");
london_marker.bindPopup("<b>London, England</b><br>The center of the world!");

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







// popup when the user clicks the map

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("The coordenates of this place are " + e.latlng.toString())
        .openOn(myMap);
}

myMap.on('click', onMapClick);