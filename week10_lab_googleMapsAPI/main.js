/*
 * main.js
 * -----------------------------------------------
 * Small javascript demo of the Google Map API
 */

var myHome = {lat: 36.616408, lng: -121.901832};

function myMap() {
	//Defines the properties of the map
	var mapProp= {
		center: myHome, //defines where the map is centered on load
		zoom:7, //specifies map initial zoom level
	};

	var mapElement = document.getElementById('googleMap');
	var map = new google.maps.Map(mapElement, mapProp);
}
