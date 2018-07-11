class Board {
  constructor() {
    this.grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    this.addPiece = this.addPiece.bind(this);
    this.disableCell = this.disableCell.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.colorCell = this.colorCell.bind(this);
  }

  addPiece(player, cellId) {
    let color;

    player === 'X' 
      ? color = 'red' 
      : color = 'blue';

    this.grid[cellId] = player;
    $('#' + cellId)
      .text(player)
      .css('color', color)
      .off('click');
  }

  disableCell() {
    $('.cell').off('click');
  }

  clearBoard(game) {
    this.grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    $('.cell')
      .text('')
      .css('background-color', '')
      .off('click')
      .on('click', function(e) {
        game.clickCell(e)
      });
  }

  colorCell(result) {
    let color;

    result.player === 'X' 
      ? color = 'red' 
      : result.player === 'O' 
        ? color = 'blue' 
        : color = 'green';
    
    for (let i = 0; i < result.winningPlay.length; i++) {
      $('#' + result.winningPlay[i])
      .css('background-color', color)
      .css('color', 'white');
    }    
  }
}