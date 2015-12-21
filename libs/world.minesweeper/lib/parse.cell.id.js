function parseCellId(id){
	console.log(id);
	var result = [];

	var pattern = /\d+/g;
	
	while ((m = pattern.exec(id)) != null) {
	  result.push(parseInt(m[0]));
	}

	return result;
}

module.exports = parseCellId;