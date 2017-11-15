var MongoClient = require('mongodb').MongoClient

var PlantQuery = function() {
  this.url = "mongodb://localhost:27017/plants"
  this.collection = collection;
}

PlantQuery.prototype = {
  all: function(){
    MongoClient.connect(this.url, function(err, db) {
      if(db){
        console.log("PlantQuery connected! TIME TO DANCE!");
      }
    });
  }
};

PlantQuery.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  }
}


module.exports = PlantQuery
