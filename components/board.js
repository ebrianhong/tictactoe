class Board {
  constructor() {
    this.grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    this.addPiece = this.addPiece.bind(this)
    this.disableCell = this.disableCell.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
    this.colorCell = this.colorCell.bind(this)
  }

  addPiece(player, cellId) {
    this.grid[cellId] = player  
    $('#' + cellId).text(player).off('click')
  }
  disableCell() {
    $('.cell').off('click')
  }
  clearBoard(game) {
    this.grid = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    $('.cell')
      .text('')
      .css('background-color', '')
      .off('click')
      .on('click', function(e) {
        game.clickCell(e)
      })
  }
  colorCell(result) {
    if (result.player === 'X') {
      for (let i = 0; i < result.winningPlay.length; i++) {
        $('#' + result.winningPlay[i]).css('background-color', 'red')
      }
    }
    if (result.player === 'O') {
      for (let i = 0; i < result.winningPlay.length; i++) {
        $('#' + result.winningPlay[i]).css('background-color', 'blue')
      }
    }
    if (result.player === 'tie') {
      $('.cell').css('background-color', 'green')      
    }
  }
}