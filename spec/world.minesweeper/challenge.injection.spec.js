var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var browser = new Browser();
var server  = require('../../libs/server');
var url = "http://localhost:7000/minesweeper";

describe('Passing the Minesweeper: injection level:', function() {
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });

    it("has load() function", function(done){
        browser.visit(url, function(err) {
            var result = browser.evaluate('typeof load');
            expect(result).toEqual('function'); 

            expect(browser.document.grid).not.toBe(undefined); 
            done();
        });
    });

    it("returns class='lost' when cell is clicked", function(done) {
        browser.visit(url, function(err) {
            browser.click('[id="cell-1x1"]');
            var classes = browser.query('[id="cell-1x1"]').className;

            expect(classes).toEqual('lost');
              
            done();
        });
               
    });
   
});