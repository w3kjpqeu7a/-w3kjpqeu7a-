var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var mongoose = require('mongoose');
mongoose.connect('mongodb://w3kjpqeu7a:w3kjpqeu7a@ds129004.mlab.com:29004/w3kjpqeu7a');


app.get('/', function(request, response) {

 
  var Users = mongoose.model('Users', { name: String,pass:String });

  var user = new Users({ name: 'Zildjian',pass:'hey' });
  user.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });
  
  response.send('Hello World!');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
