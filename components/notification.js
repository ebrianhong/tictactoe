class Notification {
  constructor() {
    this.showResult = this.showResult.bind(this);
    this.hideResult = this.hideResult.bind(this);
  }

  showResult(result) {
    let color;

    $('#result').css('visibility', 'visible');

    if (result.player === 'O') {
      $('#result p')
        .text('AI wins!')
        .css('color', 'blue');
    } else if (result.player === 'X') {
      $('#result p')
        .text('HUMAN wins!')
        .css('color', 'red');
    } else if (result.player === 'tie') {
      $('#result p')
        .text('It\'s a tie!')
        .css('color', 'green');
    }
  }
  
  hideResult() {
    $('#result').css('visibility', 'hidden');
  }
}