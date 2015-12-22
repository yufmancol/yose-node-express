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
            var element;

            browser.click('[id="cell-2x1"]');
            element = browser.query('[id="cell-2x1"]');
            expect(element.className).toEqual('lost');

            browser.click('[id="cell-4x1"]');
            element = browser.query('[id="cell-4x1"]');
            expect(element.className).toEqual('lost');

            browser.click('[id="cell-7x3"]');
            element = browser.query('[id="cell-7x3"]');
            expect(element.className).toEqual('lost');

            browser.click('[id="cell-4x4"]');
            element = browser.query('[id="cell-4x4"]');
            expect(element.className).toEqual('lost');

            browser.click('[id="cell-6x5"]');
            element = browser.query('[id="cell-6x5"]');
            expect(element.className).toEqual('lost');

            browser.click('[id="cell-7x5"]');
            element = browser.query('[id="cell-7x5"]');
            expect(element.className).toEqual('lost');

            browser.click('[id="cell-7x6"]');
            element = browser.query('[id="cell-7x6"]');
            expect(element.className).toEqual('lost');

            browser.click('[id="cell-8x7"]');
            element = browser.query('[id="cell-8x7"]');
            expect(element.className).toEqual('lost');

            done();
        });
               
    });
   
});