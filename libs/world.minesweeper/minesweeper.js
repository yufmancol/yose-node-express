var load = require('./lib/load.grid');
var clickGrid = require('./lib/click.grid');
var parseCellId = require('./lib/parse.cell.id');

var minesweeper = function(request, response) {
	var grid_size = 8;
	var content="<html><head>";
	content+='<style>td { border: 1px solid #000; width: 30px; height: 30px; }</style>'
	content+='<script type="text/javascript">\n';
	content+= load.toString();
	content+= parseCellId.toString();
	content+= clickGrid.toString();
	content+='\ndocument.grid = [];';
	content+='</script></head>';
	content+='<body><h1 id="title">Minesweeper</h1>';

	content+='<table>';
	for(var n=1; n<=grid_size; n++){
		content+="<tr id=\"row-"+n+"\">";
		for(var p=1; p<=grid_size; p++){
			content+="<td id=\"cell-"+n+"x"+p+"\" onclick=\"clickGrid(this);\"></td>";
		}
		content+="</tr>";
	}
	content+='</table>';

	content+="</body></html>";

	response.setHeader('Content-Type', 'text/html');
	response.send(content);
};

module.exports = minesweeper;