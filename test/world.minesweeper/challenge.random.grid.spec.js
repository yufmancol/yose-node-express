var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var browser = new Browser();
var server  = require('../../libs/server');
var url     = "http://localhost:7000/minesweeper";
var equal   = require('deep-equal');

describe('Passing the Minesweeper: random grid level:', function() {
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });

    it("should get different document.grid", function(done) {
        var first;
        var second;

        browser.visit(url, function(err) {
            first = browser.evaluate('document.grid');
            
            browser.visit(url, function(err) {
                second = browser.evaluate('document.grid');
                console.log(first,second);

                expect(first).not.toEqual(second);
                expect(equal(second,first)).toBe(false);

                done(); 
            }); 

            done();
        });
            
    });
   
});