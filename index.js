var glob = require('glob')
var path = require('path')

module.exports = makePlaylist

function makePlaylist(dir) {
  glob(path.join(dir || __dirname, '**', '*.mp3'), function(err, files) {
    if (files.length === 0) return
    files.map(function(f) {
      console.log(path.resolve(f))
    })
  })
}