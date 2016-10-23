var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var chai = require('chai');
var expect = chai.expect;
var browser = new Browser();
var server  = require('../../libs/server');
var url = "http://localhost:7000/minesweeper";

describe('Passing the Minesweeper: board level:', function() {
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });

    it("has the expected elements", function(done){
        browser.visit(url, function(err) {
            browser.assert.element('#title');

            done();
        });
    });
   
});