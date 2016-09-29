
var board ='';
var gridSize = 8;
var symbol = '#'
for (var row = 0; row < gridSize; row++) {
  for (var column = 0; column < gridSize; column++) {
    if (row % 2 === 0) {
      if (column % 2 !== 0){
        board += symbol;
      } else {
        board += ' ';
      }
    } else {
      if (column % 2 !== 0) {
        board += ' ';
      } else {
        board += symbol;
      }
    }
  }
  board += '\n';
}
console.log(board);
