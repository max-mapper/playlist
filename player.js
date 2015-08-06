var events = require('events')
var inherits = require('inherits')

module.exports = Player

function Player () {
  if (!(this instanceof Player)) return new Player()
  var self = this

  this.element = document.createElement('audio')
  this.element.setAttribute('autoplay', true)
  this.element.setAttribute('controls', true)

  this.element.addEventListener('ended', function () {
    self.emit('ended')
  })

  events.EventEmitter.call(this)
}

inherits(Player, events.EventEmitter)

Player.prototype.play = function (url) {
  console.log('play', url)
  this.element.setAttribute('src', url)
}

Player.prototype.pause = function () {
  this.element.pause()
}

Player.prototype.resume = function () {
  this.element.play()
}

Player.prototype.toggle = function () {
  if (this.element.paused) this.element.play()
  else this.element.pause()
}

Player.prototype.appendTo = function (el) {
  el.appendChild(this.element)
}
