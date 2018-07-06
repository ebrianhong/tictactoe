class Ai {
  constructor(newBoard) {
    this.emptyCell = []
    this.grid = newBoard.grid
    console.log(this.emptyCell)
    console.log(this.grid)
  }
  findBestMove() {
    console.log('grid', this.grid)
    this.findEmptyCells()
    console.log('empty', this.emptyCell)
    return this.emptyCell[0]
  }
  findEmptyCells() {
    this.emptyCell = []
    for (let i = 0; i < this.grid.length; i++) {
      if (typeof this.grid[i] === 'number') {
        this.emptyCell.push(i)
      }
    }
  }
  restartAi(board) {
    this.grid = board.grid
  }
}