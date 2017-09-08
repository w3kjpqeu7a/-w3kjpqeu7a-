var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!');
  var fs = require('fs');
  var stream = fs.createWriteStream("my_file.txt");
    stream.once('open', function(fd) {
    stream.write("My first row\n");
    stream.write("My second row\n");
    stream.end();
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
