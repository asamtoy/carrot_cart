var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/api/plants', function(req, res){
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('plants');
      console.log(collection)
      // collection.find({}).toArray(function(err, docs) {
      //   res.json(docs);
      //   db.close();
      // });
    });
  });

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
