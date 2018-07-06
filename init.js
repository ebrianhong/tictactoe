$(document).ready(function() {
  const newGame = new Game()
  $('.cell').on('click', function(e) {
    newGame.clickCell(e)
  })
  $('#button').on('click', function() {
    newGame.restartGame()
  })
})

