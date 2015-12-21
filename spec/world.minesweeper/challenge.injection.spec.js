var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var browser = new Browser();
var server  = require('../../libs/server');
var url = "http://localhost:7000/minesweeper";

var data = [
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'bomb' , 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
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

    it("injects document.grid", function(done){
        browser.visit(url, function(err) {

            browser.document.grid = data;
            expect(browser.document.grid).not.toBe(undefined); 
            expect(browser.document.grid).toBe(data);

            done();
        }
    });

    it("returns class='lost' when cell is clicked", function(done) {
        browser.visit(url, function(err) {

            browser.click('[id="cell-3x6"]');
            var classes = browser.query('[id="cell-3x6"]').className;

            expect(classes).toEqual('lost');
              
            done();
        });
               
    });
   
});