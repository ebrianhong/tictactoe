class Ai {
  constructor(board) {
    this.board = board.grid
    this.findBestMove = this.findBestMove.bind(this)
    this.findEmptyCells = this.findEmptyCells.bind(this)
    this.minimax = this.minimax.bind(this)
    this.callback
  }
  findBestMove(cb, board) {
    let newBoard = board.grid
    this.callback = cb
    console.log(this.minimax(newBoard, 'O', cb))
    return this.minimax(newBoard, 'O', this.callback).index
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
  minimax(board, player, cb) {
    let emptyCells = this.findEmptyCells(board)
    let humanResult = this.callback('X', board)
    
    let aiResult = this.callback('O', board)
    
    

    // human win    

    if (humanResult && humanResult.player === 'X') {
      // console.log('WIN')
      return {score: -10}
    // ai win
    } else if (aiResult && aiResult.player === 'O')   {
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
      move.index = emptyCells[i]
      board[emptyCells[i]] = player

      if (player === 'O') {
        let result = this.minimax(board, 'X')
        move.score = result.score
      } else {
        let result = this.minimax(board, 'O')
        move.score = result.score
      }
      board[emptyCells[i]] = player
      moves.push(move)
    }
    let bestMove
    if (player === 'O') {
      let bestScore = -10000
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score
          bestMove = moves[i].index
        }
      }
    } else {
      let bestScore = 10000
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score
          bestMove = moves[i].index
        }
      }
    }
    return moves[bestMove]
  }
}