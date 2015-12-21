function clickGrid(element){
	var pos = parseCellId(element.id);

	var gridContent = document.grid[pos[0]-1][pos[1]-1];

	if(gridContent === 'bomb'){
		element.className = "lost";
	} else {
		element.className = "safe";
		element.innerHTML = checkBombAround(document.grid, pos);	
	}
}

module.exports = clickGrid;