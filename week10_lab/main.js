/*
 * main.js
 * -----------------------------------------------
 * Small javascript demo of the Google Map API
 */



//WRITE NEW CODE HERE
//uncomment the code below for var myHome
//update the latitude and longitude for where you want the center of your map to be
var myHome = {lat: 36.616408, lng: -121.901832};

function myMap() {
	//Defines the properties of the map
	var mapProp= {
		center: myHome, //defines where the map is centered on load
		zoom:7, //specifies map initial zoom level
	};

	//WRITE NEW CODE HERE
	//uncomment code below
	//first select the div we created for the google map on index.html
	//then create a new google map passing in two arguments:
	//1) where you want the map to render (the div) and 2) the map properties variable
	var mapElement = document.getElementById('googleMap');
	var map = new google.maps.Map(mapElement, mapProp);
}
