class Ai {
  constructor(board) {
    this.board = board.grid
    this.findBestMove = this.findBestMove.bind(this)
    this.findEmptyCells = this.findEmptyCells.bind(this)
    this.minimax = this.minimax.bind(this)
    this.checkResult
  }
  findBestMove(cb) {
    // return this.findEmptyCells()[0]
    this.checkResult = cb
    //use minimax to find the best move (need cellId)
    console.log(this.minimax(this.board, 'O').index)
    return this.minimax(this.board, 'O').index
  }
  findEmptyCells() {
    let emptyCells = []
    for (let i = 0; i < this.board.length; i++) {
      if (typeof this.board[i] === 'number') {
        emptyCells.push(i)
      }
    }
    return emptyCells
  }
  minimax(board, player) {
    // console.log(player)
    let emptyCells = this.findEmptyCells()
    let humanResult = this.checkResult('X', board)
    let aiResult = this.checkResult('O', board)

    // human win    
    if (humanResult && humanResult === 'X') {
      // console.log('WIN')
      return {score: -10}
    // ai win
    } else if (aiResult && aiResult === 'O')   {
      // console.log('LOSS')
      return {score: 10}
    // tie
    } else if (emptyCells.length === 0) {
      // console.log('TIE')
      return {score: 0}
    }
    
    let moves = []
    for (let i = 0; i < emptyCells.length; i++) {
      let move = {}
      move.index = board[emptyCells[i]]
      board[emptyCells[i]] = player

      if (player === 'O') {
        let result = this.minimax(board, 'X')
        move.score = result.score
      } else {
        let result = this.minimax(board, 'O')
        move.score = result.score
      }
      board[emptyCells[i]] = move.index
      moves.push(move)
    }
    let bestMove
    if (player === 'O') {
      let bestScore = -10000
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    } else {
      let bestScore = 10000
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    }
    return moves[bestMove]
  }
}