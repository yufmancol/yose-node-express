var express = require('express');

var server = express();

server.get('/', function(request, response){
    require('./challenge.hello.yose/hello')(request, response);
});

server.get('/ping', function(request, response){
    require('./challenge.ping/ping.endpoint')(request, response);
});

module.exports = server;
