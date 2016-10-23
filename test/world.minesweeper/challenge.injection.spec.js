var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var chai = require('chai');
var expect = chai.expect;
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
            expect(result).to.equal('function'); 

            done();
        });
    });

    it("can inject document.grid", function(done){
        browser.visit(url, function(err) {

            browser.assert.global('grid', [[]]);

            done();
        });
    });

    it("returns class='lost' when cell is clicked", function(done) {
        browser.visit(url, function(err) {
            browser.document.grid = data;
            var element;

            browser.click('[id="cell-2x1"]');
            element = browser.query('[id="cell-2x1"]');
            expect(element.className).to.equal('lost');

            done();
        });
               
    });
   
});