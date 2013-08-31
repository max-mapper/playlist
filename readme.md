# playlist

generates list of all .mp3 files in current folder tree

usage:

```sh
npm install playlist -g
cd some_folder
playlist | mplayer -shuffle -playlist /dev/fd/3 3<&0 </dev/tty
```

# license

BSD