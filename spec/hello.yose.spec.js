var request = require('request');
var http    = require('http');
var server  = require('../libs/server');

describe('Passing the hello yose level:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('answers with text/plain header', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(response.headers['content-type']).toEqual('text/html');
            done(); 
        });
    });
   
    it('returns the expected output', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(body).toEqual( 'Hello Yose' );
            done(); 
        });
    });
   
});