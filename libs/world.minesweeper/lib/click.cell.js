function clickCell(element){
	var position = parseCellId(element.id);
	var row = position[0];
	var column = position[1];

	var grid = document.grid;
	console.log(row, column);
	var clickedCellContent = grid[row][column];
	
	element.innerHTML = ''; // initially clean up inner html content

	for(n=0; n<grid.length; n++){
		
		for(p=0; p<grid.length; p++){
			var location = [n,p];
			var bombCount = checkBombAround(grid, location);

			var cellRow = n+1;
			var cellColumn = p+1;
			var cellId = "cell-"+cellRow+"x"+cellColumn;
			var cell = document.getElementById(cellId);

			if(bombCount > 0) {
				cell.innerHTML = bombCount; 
			}

			var cellContent = grid[n][p];
			if(cellContent === 'bomb'){
				cell.className = "lost";
			} else {
				cell.className = "safe";
			}
		}

	}

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