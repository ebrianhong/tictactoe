class Ai {
  constructor(board) {
    this.emptyCell = []
    this.board = board
    this.findBestMove = this.findBestMove.bind(this)
    this.findEmptyCells = this.findEmptyCells.bind(this)
  }
  findBestMove() {
    this.findEmptyCells()
    return this.emptyCell[0]
  }
  findEmptyCells() {
    this.emptyCell = []
    for (let i = 0; i < this.board.grid.length; i++) {
      if (typeof this.board.grid[i] === 'number') {
        this.emptyCell.push(i)
      }
    }
  }
}