var request = require('request');
var http    = require('http');
var server  = require('../libs/server');

describe('Passing the Power of Two level:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('answers with application/json header', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(response.headers['content-type']).toEqual('application/json');
            done(); 
        });
    });
   
    it('returns the expected output', function(done) {
        request('http://localhost:7000/primeFactors?number=16', function(error, response, body) {
            expect(body).toEqual( JSON.stringify( 
                {
                    "number" : 16,
                    "decomposition" : [ 2, 2, 2, 2 ]
                } 
            ));
            
            done(); 
        });
    });
   
});