function load(){
	var grid = [
				[
	                ['empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb', 'empty', 'empty'],
	                ['empty', 'empty', 'empty', 'bomb',  'empty', 'empty', 'empty', 'bomb'],
	                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'bomb', 'empty'],
	                ['empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb', 'empty', 'empty'],
	                ['empty', 'empty', 'empty', 'bomb',  'empty', 'empty', 'empty', 'bomb'],
	                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'bomb', 'empty'],
	                ['empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb', 'empty', 'empty'],
	                ['empty', 'empty', 'empty', 'bomb',  'empty', 'empty', 'empty', 'bomb']
            	],
            	[
	            	['bomb' , 'empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb' , 'empty'],
	                ['empty', 'empty', 'empty', 'empty', 'empty', 'bomb', 'empty', 'empty'],
	                ['empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb', 'empty', 'empty'],
	                ['bomb' , 'empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb' , 'empty'],
	                ['empty', 'empty', 'empty', 'empty', 'empty', 'bomb', 'empty', 'empty'],
	                ['empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb', 'empty', 'empty'],
	                ['bomb' , 'empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb' , 'empty'],
	                ['empty', 'empty', 'empty', 'empty', 'empty', 'bomb', 'empty', 'empty']
                ],[
                	['bomb' , 'bomb' , 'bomb', 'empty', 'empty', 'empty', 'empty', 'bomb' ],
	                ['empty', 'empty', 'empty', 'empty', 'bomb' , 'bomb' , 'bomb', 'empty'],
	                ['empty', 'empty', 'empty', 'bomb' , 'bomb' , 'bomb', 'empty', 'empty'],
	                ['bomb' , 'bomb' , 'bomb', 'empty', 'empty', 'empty', 'empty', 'bomb' ],
	                ['empty', 'empty', 'empty', 'empty', 'bomb' , 'bomb' , 'bomb', 'empty'],
	                ['empty', 'empty', 'empty', 'bomb' , 'bomb' , 'bomb', 'empty', 'empty'],
	                ['bomb' , 'bomb' , 'bomb', 'empty', 'empty', 'empty', 'empty', 'bomb' ],
	                ['empty', 'empty', 'empty', 'empty', 'bomb' , 'bomb' , 'bomb', 'empty']
                ],[
					['empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb', 'empty', 'empty'],
	                ['bomb' , 'empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb' , 'empty'],
	                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
	                ['empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb', 'empty', 'empty'],
	                ['bomb' , 'empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb' , 'empty'],
	                ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
	                ['empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb', 'empty', 'empty'],
	                ['bomb' , 'empty', 'empty', 'bomb' , 'empty', 'empty', 'bomb' , 'empty']
                ]
            ];

	document.grid = grid[Math.floor(Math.random() * grid.length)];
	
	//console.log(document.grid);
};

module.exports = load;