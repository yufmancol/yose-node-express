function checkBombAround(data, position){
	var bombCount = 0;
	var gridSize = data.length;
	var row = position[0];
	var column = position[1];
	var around = [];
	
	// --- upper
	// row-1,column-1
	if(row > 0){
		if(data[row-1][column-1] === 'bomb'){
			bombCount++;
		}

		// row-1,column
		if(data[row-1][column] === 'bomb'){
			bombCount++;
		}

		// row-1,column+1
		if(data[row-1][column+1] === 'bomb'){
			bombCount++;
		}
	}

	// --- middle
	// row,column-1  
	if(column > 0 && data[row][column-1] === 'bomb'){
		bombCount++;
	}

	// row,column+1
	if(data[row][column+1] === 'bomb'){
		bombCount++;
	}

	// --- lower
	// row+1,column-1
	if(row < gridSize-1){
		if(data[row+1][column-1] === 'bomb'){
			bombCount++;
		}

		// row+1,column
		if(data[row+1][column] === 'bomb'){
			bombCount++;
		}

		// row+1,column+1
		if(data[row+1][column+1] === 'bomb'){
			bombCount++;
		}
	}

	return around;
};

module.exports = checkBombAround;