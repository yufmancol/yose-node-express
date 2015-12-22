var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var browser = new Browser();
var server  = require('../../libs/server');
var url = "http://localhost:7000/minesweeper";

var data = [
            ['bomb' , 'empty', 'empty'],
            ['empty', 'empty', 'empty'],
            ['empty', 'empty', 'bomb' ]
        ];

describe('Passing the Minesweeper: open field level:', function() {
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });

    it("should reveal all open fields", function(done) {
        browser.visit(url, function(err) {
            browser.document.grid = data;

            browser.click('[id="cell-3x1"]');
/*
            var cell_2x1 = browser.query('[id="cell-2x1"]');
            expect(cell_2x1.innerHTML).toEqual('1');
            expect(cell_2x1.className).toEqual('safe');

            var cell_2x2 = browser.query('[id="cell-2x2"]');
            expect(cell_2x2.innerHTML).toEqual('2');
            expect(cell_2x2.className).toEqual('safe');

            var cell_3x2 = browser.query('[id="cell-3x2"]');
            expect(cell_3x2.innerHTML).toEqual('1');
            expect(cell_3x2.className).toEqual('safe');
*/
            done();
        });
               
    });
   
});