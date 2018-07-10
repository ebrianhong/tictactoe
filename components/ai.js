class Ai {
  constructor() {
    this.findBestMove = this.findBestMove.bind(this)
    this.findEmptyCells = this.findEmptyCells.bind(this)
    this.minimax = this.minimax.bind(this)
    this.callback
  }
  findBestMove(cb, board) {
    let grid = board.grid
    this.callback = cb
    return this.minimax(grid, 'O', this.callback).index
  }
  findEmptyCells(board) {
    let emptyCells = []
    for (let i = 0; i < board.length; i++) {
      if (typeof board[i] === 'number') {
        emptyCells.push(i)
      }
    }
    return emptyCells
  }
  minimax(grid, player, cb) {
    let emptyCells = this.findEmptyCells(grid)
    let humanResult = this.callback('X', grid)
    
    let aiResult = this.callback('O', grid)

    if (humanResult && humanResult.player === 'X') {
      return {score: -10}
    } else if (aiResult && aiResult.player === 'O')   {
      return {score: 10}
    } else if (emptyCells.length === 0) {
      return {score: 0}
    }
    
    let moves = []
    for (let i = 0; i < emptyCells.length; i++) {
      let move = {}
      move.index = grid[emptyCells[i]]
      grid[emptyCells[i]] = player

      if (player === 'O') {
        let result = this.minimax(grid, 'X')
        move.score = result.score
      } else {
        let result = this.minimax(grid, 'O')
        move.score = result.score
      }
      grid[emptyCells[i]] = move.index
      moves.push(move)
    }
    let bestMove
    if (player === 'O') {
      let bestScore = -9000
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    } else {
      let bestScore = 9000
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