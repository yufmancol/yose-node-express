function parseCellId(id){
	var result = [];

	var pattern = /\d+/g;
	
	while ((m = pattern.exec(id)) != null) {
	  result.push(parseInt(m[0])-1);
	}

	return result;
};

module.exports = parseCellId;