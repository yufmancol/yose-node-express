var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {
    response.setHeader('Content-Type', 'application/json');
	
	var number = parseInt(request.query['number']);
    console.log('Prime Factors Challenge Number: ' + number);

    var decomposition = primeFactorsOf(number);

    response.send({ number: number, decomposition: decomposition });
};

module.exports = primeFactors;