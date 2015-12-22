var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var browser = new Browser();
var server  = require('../../libs/server');
var url = "http://localhost:7000/minesweeper";

var data = [
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['bomb',  'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['bomb',  'empty', 'empty', 'bomb',  'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'bomb',  'empty', 'empty', 'empty'],
        ['empty', 'empty', 'bomb',  'empty', 'bomb',  'bomb',  'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'bomb',  'empty'],
    ];

describe('Passing the Minesweeper: safe cell level:', function() {
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });

    it("returns class='safe' and innerHTML='1' when cell is clicked", function(done) {
        browser.visit(url, function(err) {
            browser.document.grid = data;

            browser.click('[id="cell-8x4"]');
            var element = browser.query('[id="cell-8x4"]');

            var classes = element.className;
            expect(classes).toEqual('safe');

            var innerHTML = element.innerHTML;
            expect(innerHTML).toEqual('2');

            done();
        });
               
    });
   
});