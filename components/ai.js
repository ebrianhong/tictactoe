class Ai {
  constructor() {
    this.ai;
    this.human;
    this.checkResult;

    this.findBestMove = this.findBestMove.bind(this);
    this.findEmptyCells = this.findEmptyCells.bind(this);
    this.minimax = this.minimax.bind(this);
  }

  findBestMove(cb, board, ai, human) {
    let grid = board.grid;
    this.checkResult = cb;
    this.ai = ai;
    this.human = human;
    return this.minimax(grid, this.ai).index;
  }

  findEmptyCells(board) {
    let emptyCells = [];
    for (let i = 0; i < board.length; i++) {
      if (typeof board[i] === 'number') {
        emptyCells.push(i);
      }
    }
    return emptyCells;
  }

  minimax(grid, player) {
    let emptyCells = this.findEmptyCells(grid);
    let humanResult = this.checkResult(this.human, grid);
    let aiResult = this.checkResult(this.ai, grid);

    if (humanResult && humanResult.player === this.human) {
      return {score: -10};
    } else if (aiResult && aiResult.player === this.ai)   {
      return {score: 10};
    } else if (emptyCells.length === 0) {
      return {score: 0};
    }
    
    let moves = [];
    for (let i = 0; i < emptyCells.length; i++) {
      let move = {};
      move.index = grid[emptyCells[i]];
      grid[emptyCells[i]] = player;

      if (player === this.ai) {
        let result = this.minimax(grid, this.human);
        move.score = result.score;
      } else {
        let result = this.minimax(grid, this.ai);
        move.score = result.score;
      }

      grid[emptyCells[i]] = move.index;
      moves.push(move);
    }

    let bestMove;
    if (player === this.ai) {
      let bestScore = -9000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 9000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove];
  }
}