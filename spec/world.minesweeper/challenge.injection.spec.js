var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var browser = new Browser();
var server  = require('../../libs/server');
var url = "http://localhost:7000/minesweeper";

var data = [
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['bomb', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['bomb', 'empty', 'empty', 'bomb', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'bomb', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'bomb', 'empty', 'bomb', 'bomb', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'bomb', 'empty'],
    ];

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

            done();
        });
    });

    it("can inject document.grid", function(done){
        browser.visit(url, function(err) {

            browser.document.grid = data;
            expect(browser.document.grid).not.toBe(undefined); 
            expect(browser.document.grid).toBe(data);

            done();
        });
    });

    it("returns class='lost' when cell is clicked", function(done) {
        browser.visit(url, function(err) {
            browser.document.grid = data;

            browser.click('[id="cell-2x1"]');
            var element = browser.query('[id="cell-2x1"]');

            var classes = element.className;
            expect(classes).toEqual('lost');

            element = browser.query('[id="cell-7x3"]');
            expect(element.className).toEqual('lost');
               
            done();
        });
               
    });
   
});