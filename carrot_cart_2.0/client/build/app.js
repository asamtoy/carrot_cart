var initialize = function(){

  var geolocation = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
    };

    function success(pos) {
    var crd = pos.coords;

    var request = new XMLHttpRequest();
    request.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat=" + crd.latitude.toFixed(0) + ",&lon=" + crd.longitude + "&APPID=36a7fd6e1d882bfe1c58d1db485ab9b5")
    request.addEventListener("load", function(){
      var data = JSON.parse(request.responseText)
      console.log(data)

    })

    request.send()

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
