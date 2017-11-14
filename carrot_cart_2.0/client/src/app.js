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

    var request = new XMLHttpRequest();
    request.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat=" + crd.latitude.toFixed(0) + ",&lon=" + crd.longitude + "&APPID=36a7fd6e1d882bfe1c58d1db485ab9b5")
    request.addEventListener("load", function(){
      var data = JSON.parse(request.responseText)
      console.log(data)

      var currentTemperature = data.main.temp - 273.15;
      var temp = document.getElementById('current-temperature').innerHTML = "The current temperature is " + currentTemperature.toFixed(1) + " degrees.";

      var weatherDescription = data.weather[0].description;
      var forecast = document.getElementById('forecast').innerHTML = "The forecast for today is " + weatherDescription + ".";

    })
    request.send()

  }

}

window.addEventListener('load', initialize);
