class Board {
  constructor() {
    this.grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.addPiece = this.addPiece.bind(this)
    this.disableBoard = this.disableBoard.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
    this.colorCell = this.colorCell.bind(this)
  }

  addPiece(player, cellId) {
    this.grid[cellId] = player  
    $('#' + cellId).text(player).off('click')
  }
  disableBoard() {
    $('.cell').off('click')
  }
  clearBoard(game) {
    this.grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    $('.cell')
      .text('')
      .css('background-color', '')
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
      for (let i = 0; i < this.grid.length; i++) {
        $('.cell').css('background-color', 'green')
      }
    }
  }
}