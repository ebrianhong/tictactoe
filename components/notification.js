class Notification {
  constructor() {
  }
  presentResult(result) {
    $('#result').css('visibility', 'visible')
  }
  hideResult() {
    $('#result').css('visibility', 'hidden')
  }
}