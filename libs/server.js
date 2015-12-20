var express = require('express');

var server = express();

server.set('views', './views')
server.set('view engine', 'jade')

server.get('/', function(request, response){
    require('./challenge.hello.yose/hello')(request, response);
});

server.get('/ping', function(request, response){
    require('./challenge.ping/ping.endpoint')(request, response);
});

server.get('/primeFactors', function(request, response){
    require('./world.prime.factors/prime.factors')(request, response);
});

server.get('/minesweeper', function(request, response){
    require('./world.minesweeper/minesweeper')(request, response);
});

module.exports = server;