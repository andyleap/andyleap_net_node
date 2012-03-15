var express = require('express');

var app = express.createServer(express.logger());

app.get('/album/:id', function(request, response) {
  response.send('album' + request.params.id);
});

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});