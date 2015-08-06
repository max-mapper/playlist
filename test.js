var createPlaylist = require('./index.js')
var createPlayer = require('./player.js')

var player = createPlayer()
player.appendTo(document.body)

var pl = createPlaylist(player)
pl.add('808clap.mp3')
pl.add('tetris.mp3')
pl.add('techno.mp3')
pl.play()

window.pl = pl

var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var pause = document.querySelector('.pause')
var resume = document.querySelector('.resume')

prev.addEventListener('click', function () {
  pl.prev()
})

next.addEventListener('click', function () {
  pl.next()
})

pause.addEventListener('click', function () {
  pl.pause()
})

resume.addEventListener('click', function () {
  pl.resume()
})

