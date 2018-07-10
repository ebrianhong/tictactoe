class Game {
  constructor(board, ai, notification) {
    this.result = null
    this.humanPlayer = 'X'
    this.aiPlayer = 'O'
    this.round = 0
    this.board = board
    this.aiLogic = ai
    this.notification = notification
    this.restartGame = this.restartGame.bind(this)
    this.clickCell = this.clickCell.bind(this)
    // this.checkResult = this.checkResult.bind(this)
  }

  restartGame() {
    this.result = null
    this.round = 0    
    this.board.clearBoard(this)
    this.notification.hideResult()
  }

  clickCell(e) {
    this.board.addPiece(
      this.humanPlayer, 
      e.target.id
    )
    if(this.checkResult(this.humanPlayer, this.board.grid)) {
      this.board.disableCell()
      this.notification.presentResult(this.result)
      this.board.colorCell(this.result)
    } else {      
      this.board.addPiece(
        this.aiPlayer, 
        this.aiLogic.findBestMove(this.checkResult, this.board)
      )
      if(this.checkResult(this.aiPlayer, this.board.grid)) {        
        this.board.disableCell()
        this.notification.presentResult(this.result)
        this.board.colorCell(this.result)
      }  
    }
  }    

  checkResult(player, grid) {
    this.round++
    let winner = {
      player: null,
      winningPlay: []
    }
    
    // check horizontal
    for (let i = 0; i < grid.length; i += 3) {
      if (
        grid[i] === player && 
        grid[i] === grid[i + 1] && 
        grid[i] === grid[i + 2]
      ) {
        winner.player = player
        winner.winningPlay.push(i, i + 1, i + 2)
        this.result = winner
        return winner
      }
    }

    // check vertical
    for (let i = 0; i < 3; i++) {
      if (
        grid[i] === player && 
        grid[i] === grid[i + 3] && 
        grid[i] === grid[i + 6]
      ) {
        winner.player = player
        winner.winningPlay.push(i, i + 3, i + 6)
        this.result = winner
        return winner
      }
    }

    // check diagnoal
    if (
      grid[0] === player && 
      grid[0] === grid[4] && 
      grid[0] === grid[8]
    ) {
      winner.player = player
      winner.winningPlay.push(0, 4, 8)
      this.result = winner
      return winner
    }
    if (
      grid[2] === player && 
      grid[2] === grid[4] && 
      grid[2] === grid[6]
    ) {
      winner.player = player
      winner.winningPlay.push(2, 4, 6)
      this.result = winner
      return winner
    }

    // check tie
    if (this.round >= 9) {
      winner.player = 'tie'
      winner.winningPlay = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      this.result = winner
      return winner
    }
    return null
    
  }
  
}
