var request = require('request');
var http    = require('http');
var server  = require('../libs/server');

describe('Passing the ping level:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('answers with application/json header', function(done) {
        request('http://localhost:7000/ping', function(error, response, body) {
            expect(response.headers['content-type']).toEqual('application/json');
            done(); 
        });
    });
   
    it('answsers the expected pong', function(done) {
        request('http://localhost:7000/ping', function(error, response, body) {
            expect(body).toEqual( JSON.stringify( { alive: true } ) );
            done(); 
        });
    });
   
});