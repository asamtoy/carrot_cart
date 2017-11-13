// var requestHelper = require('./helpers/request_helper.js')

var initialize = function(){
  var geolocation = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
    };

    function success(pos) {
    var crd = pos.coords;

    console.log(crd);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
  };

    function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, geolocation);
}

window.addEventListener('load', initialize);
