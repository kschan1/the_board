
var board ='';
var gridSize = 8;
var symbol = '#'
for (var row = 0; row < gridSize; row++) {
  for (var column = 0; column < gridSize; column++) {
    if (row % 2 === 0) {
      if (column % 2 !== 0){
        board = board.concat(symbol);
      } else {
        board = board.concat(' ');
      }
    } else {
      if (column % 2 !== 0) {
        board = board.concat(' ');
      } else {
        board = board.concat(symbol);
      }
    }
  }
  board = board.concat('\n');
}
console.log(board);
