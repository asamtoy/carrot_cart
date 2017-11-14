var initialize = function(){
  console.log("1");
  var geolocation = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };
  console.log("2");
  navigator.geolocation.getCurrentPosition(success, error, geolocation);

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  function success(pos) {
    var crd = pos.coords;
    console.log("3");

    console.log(crd);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);

    var request = new XMLHttpRequest();
    request.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat=" + crd.latitude.toFixed(0) + ",&lon=" + crd.longitude + "&APPID=36a7fd6e1d882bfe1c58d1db485ab9b5")
    request.addEventListener("load", function(){
      var data = JSON.parse(request.responseText)
      console.log(data)
      console.log("4");

      console.log("5");

    })
    request.send()

    console.log("6");


    console.log("7");

    console.log("8");

  }
  console.log("9");
}

window.addEventListener('load', initialize);
