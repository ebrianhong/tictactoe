$(document).ready(function() {
  const newBoard = new Board()
  const newAi = new Ai()
  const newNotification = new Notification()
  const newGame = new Game(newBoard, newAi, newNotification)
  $('.cell').on('click', function(e) {
    newGame.clickCell(e)
  })
  $('#button').on('click', function() {
    newGame.restartGame()
  })
})

