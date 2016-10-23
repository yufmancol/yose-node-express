var express = require('express');
var server = express();
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: server
});

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

server.get('/astroport', function(request, response){
	require('./world.astroport/astroport')(request, response);
});

server.use(express.static('public'));
module.exports = server;