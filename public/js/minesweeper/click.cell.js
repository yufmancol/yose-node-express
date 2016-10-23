function clickCell(element){
	var position = parseCellId(element.id);
	var row = position[0];
	var column = position[1];

	var grid = document.grid;
	console.log(row, column);
	var clickedCellContent = grid[row][column];
	
	element.innerHTML = ''; // initially clean up inner html content

	var bombCount = checkBombAround(grid, position);
	if(bombCount > 0) {
		element.innerHTML = bombCount; 
	} else {
		element.innerHTML = '';
	}

	if(clickedCellContent === 'bomb'){
		element.className = "lost";
	} else {
		element.className = "safe";
	}

};

module.exports = clickCell;