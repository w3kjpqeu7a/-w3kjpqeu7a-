var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://w3kjpqeu7a:w3kjpqeu7a@ds129004.mlab.com:29004/w3kjpqeu7a";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = { name: "Company Inc", address: "Highway 37" };
    db.w3kjpqeu7a("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); 
  
  response.send('Hello World!');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
