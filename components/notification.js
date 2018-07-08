class Notification {
  constructor() {
    this.presentResult = this.presentResult.bind(this)
    this.hideResult = this.hideResult.bind(this)
  }
  presentResult(result) {
    $('#result').css('visibility', 'visible')
  }
  hideResult() {
    $('#result').css('visibility', 'hidden')
  }
}