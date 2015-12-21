var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {
    
	var number = parseInt(request.query['number']);
    console.log('Prime Factors Challenge Number: ' + number);

    var decomposition = primeFactorsOf(number);

	response.setHeader('Content-Type', 'application/json');
    response.send({ number: number, decomposition: decomposition });
};

module.exports = primeFactors;