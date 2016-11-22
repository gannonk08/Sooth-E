// Edit the center point and zoom level
var map = L.map('map', {
  center: [39.7392, -104.9903],
  zoom: 13,
  scrollWheelZoom: false
});

// Edit links to your GitHub repo and data source credit
map.attributionControl
.setPrefix('View <a href="http://github.com/gannonk08/s">open-source code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');
map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census</a>');

// Basemap layer
new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

// Get your own free Mapzen search API key and see geocoder options at https://github.com/mapzen/leaflet-geocoder
L.control.geocoder('search-jBPBt5y').addTo(map);

L.control.scale().addTo(map);

// place a default blue marker on map
// L.marker([41.767068, -72.716280]).addTo(map);

// Edit file name of the GeoJson map data to be uploaded from your local directory
$.getJSON("../../data/zillow-neighborhoods.geojson", function (data) {
  var geoJsonLayer = L.geoJson(data, {
    style: function (feature) {      if(feature.properties.COUNTY === "Denver") {
      var fillColor,
        level = feature.properties.NAME;
        var neighborhoodArray = []
        fillColor = getRandomColor()
      return {
        'color': 'gray',
        'weight': 2,
        'opacity': 1,
        'dashArray': 3,
        'fillColor': fillColor,
        'fillOpacity': 0.8
      }
    }

    },
    onEachFeature: function( feature, layer) {
      var popupText = "Neighborhood: <b>" + feature.properties.NAME + "</b>" + "<br>City: <b>" + feature.properties.CITY + "</b>"
         + "<br>County: <b>" + feature.properties.COUNTY + "</b>";
      layer.bindPopup(popupText);
    }
  }).addTo(map);
});


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

// Edit grades to match ranges inserted above
  var div = L.DomUtil.create('div', 'info legend'),
    grades = ['Very Low', 'Low', 'Moderate', 'High', 'Very High'],
    labels = [],
    from, to;

  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      '<i style="background:' + fillColor(from + 1) + '"></i> ' +
      from + (to ? '&ndash;' + to : '+'));
  }

  div.innerHTML = labels.join('<br>');
  return div;
};

legend.addTo(map);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
