var minesweeper = function(request, response) {
	var grid_size = 8;
	var content="<html><body>";
	content+='<h1 id="title">Minesweeper</h1>';

	for(var n=1; n<=grid_size; n++){
		for(var p=1; p<=grid_size; p++){
			//console.log('cell-'+n+'x'+p);
			content+="<label id=\"cell-"+n+"x"+p+"\"></label>";
		}
	}
	
	content+="</body></html>";
	//console.log(content);

	response.setHeader('Content-Type', 'text/html');
	response.send(content);
};

module.exports = minesweeper;