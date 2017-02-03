var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var config = require('./server/config');

var api = require('./server/routes/api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', config.port);


var server = http.createServer(app);

server.listen(config.port, () => console.log(`API running on localhost:${config.port}`));