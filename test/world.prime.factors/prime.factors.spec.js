var chai = require('chai');
var expect = chai.expect;

var primeFactorsOf = require('../../libs/world.prime.factors/lib/prime.factors.of');

describe('Prime factors decomposition', function() {

	it('can decompose 2', function() {
		expect(primeFactorsOf(2)).to.equal([2]);
	});
	
	it('can decompose 8', function() {
		expect(primeFactorsOf(8)).to.equal([2, 2, 2]);
	});
	
	it('can decompose 27', function() {
		expect(primeFactorsOf(27)).to.equal([3, 3, 3]);
	});

});