var parseCellId = require('../../../libs/world.minesweeper/lib/parse.cell.id');

describe("Parse cell id", function() {
  it("parses cell id into column and row position", function() {
  	var result = parseCellId('cell-10x12');

  	expect(result).toEqual([9,11]);  
  });
});