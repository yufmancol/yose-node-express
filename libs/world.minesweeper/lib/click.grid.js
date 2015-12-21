function clickGrid(element){
	var pos = parseCellId(element.id);

	var gridContent = document.grid[pos[0]-1][pos[1]-1];

	console.log(gridContent);
	if(gridContent === 'bomb'){
		element.className = "lost";
	} else {
		element.className = "safe";
		element.innerHTML = 1;	
	}
}

module.exports = clickGrid;