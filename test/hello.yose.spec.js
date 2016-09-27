var request = require('request');
var http    = require('http');
var chai = require('chai');
var expect = chai.expect;
var server  = require('../libs/server');

describe('Passing the hello yose level:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('answers with text/html header', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(response.headers['content-type']).to.equal('text/html');
            done(); 
        });
    });
   
    it('returns the expected output', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(body).to.contain( 'Hello Yose' );
            done(); 
        });
    });
   
});