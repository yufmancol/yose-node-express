primeFactorsOf = function(number) {
	var factors = [];
  var iterate = number / 2;
  for(var i=0;i<iterate;i++){
    factors.push(2);
  }
	return factors;
};

module.exports = primeFactorsOf;
