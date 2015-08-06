var nets = require('nets')

module.exports = Playlist

function Playlist (player) {
  if (!(this instanceof Playlist)) return new Playlist(player)
  this.context = new (window.AudioContext || window.webkitAudioContext)()
  this.player = player
  this.list = []
  this.current = 0
}

Playlist.prototype.play = function () {
  var self = this
  var song = this.list[this.current]
  if (!song) return
  this.player.play(song)
  this.player.once('ended', function () {
    self.next()
  })
}

Playlist.prototype.add = function (url) {
  this.list.push(url)
}

Playlist.prototype.pause = function (url) {
  this.player.pause()
}

Playlist.prototype.resume = function (url) {
  this.player.resume()
}

Playlist.prototype.prev = function (url) {
  var last = this.current - 1
  if (last < 0) return
  this.current = last
  var song = this.list[last]
  this.player.play(song)
}

Playlist.prototype.next = function () {
  var next = this.current + 1
  if (next > this.list.length - 1) return
  this.current = next
  var song = this.list[next]
  this.player.play(song)
}

Playlist.prototype.toggle = function () {
  this.player.toggle()
}

// .playing
// .current
// .list()
// .get(idx)
// .remove(url)
// .seek(percent)
// .toggle()
