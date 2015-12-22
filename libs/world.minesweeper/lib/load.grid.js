function load(){
	var gridSize = Math.floor((Math.random() * 10) + 1);
	document.grid = new Array(gridSize); // random grid;
};

module.exports = load;