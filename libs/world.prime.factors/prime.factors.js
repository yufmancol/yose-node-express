var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {
  var temp = request.query['number'];
	var number = parseInt(temp);

  var data;
  if(isNaN(number)){
    data = { number: temp, error: 'not a number' };
  }
  else{
    var decomposition = primeFactorsOf(number);
    data = { number: number, decomposition: decomposition };
  }

	response.setHeader('Content-Type', 'application/json');
  response.send(data);
};

module.exports = primeFactors;
