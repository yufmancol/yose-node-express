var minesweeper = function(request, response) {
	response.setHeader('Content-Type', 'text/html');
	response.render('minesweeper.html');
};

module.exports = minesweeper;