function load(){
	document.grid = new Array(Math.ceil(( (Math.random()) * 10)));
	console.log(document.grid);
};

module.exports = load;