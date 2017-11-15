/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// var PlantQuery = require('./server/db/plantQuery.js'); //NEW

var initialize = function(){

  var geolocation = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(success, error, geolocation);

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  function success(pos) {
    var crd = pos.coords;

    console.log(crd);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);

    var latitude = document.getElementById('geolocation-lat').innerHTML = "Your latitude is " + crd.latitude + ".";
    var longitude = document.getElementById('geolocation-lon').innerHTML = "Your longitude is " + crd.longitude + ".";

    var request = new XMLHttpRequest();
    request.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat=" + crd.latitude.toFixed(0) + ",&lon=" + crd.longitude + "&APPID=36a7fd6e1d882bfe1c58d1db485ab9b5")
    request.addEventListener("load", function(){
      var data = JSON.parse(request.responseText)
      console.log(data)

      var currentTemperature = data.main.temp - 273.15;
      var temp = document.getElementById('current-temperature').innerHTML = "The current temperature is " + currentTemperature.toFixed(1) + " degrees.";

      var weatherDescription = data.weather[0].description;
      var forecast = document.getElementById('forecast').innerHTML = "Current weather: " + weatherDescription + ".";

    })
    request.send()
  }

  

  var request2 = new XMLHttpRequest();
  request2.open('GET', "localhost:3000/plants")
  request2.addEventListener("load", function(){
    var data2 = JSON.parse(request2.responseText)
    console.log(data2)
    request2.send()
  })


}

window.addEventListener('load', initialize);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map