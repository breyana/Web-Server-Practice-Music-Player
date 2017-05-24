const express = require('express')
const router = express.Router()

const artists = require('./data/artists.json')
const albums = require('./data/albums.json')
const songs = require('./data/songs.json')

function convertToMinutes(time) {
  let minutes = Math.floor(time / 60)
  let seconds = time - minutes * 60
  if (seconds < 10) {
    seconds = "0"+seconds
  }
  return minutes + ':' + seconds
}

const albumsWithArtists = albums.map((album) => {
  album.artist = artists.filter((artist) => {
    return artist.id === album.artist_id
  })[0].name
  return album
})

const songsWithArtistAlbum = songs.map((song) => {
  const correspondingAlbum = albumsWithArtists.filter((album) => {
    return album.id === song.album_id
  })[0]
  song.album = correspondingAlbum.title
  song.artist = correspondingAlbum.artist
  song.artist_id = correspondingAlbum.artist_id
  song.length = convertToMinutes(song.length)
  return song
})

router.get('/', function(request, response) {
  response.render('index', { artists: artists })
})

router.get('/albums', function(request, response) {
  response.render('albums', {
    albums: albumsWithArtists
  })
})

router.get('/songs', function(request, response) {
  response.render('songs', {
    songs: songsWithArtistAlbum
  })
})

router.get('/artists/:artist_id', function(request, response) {
  const artist = artists.filter((artist) => {
    return artist.id == request.params.artist_id
  })[0]

  response.render('artist', {
    name: artist.name,
    genre: artist.genre
  })
})

router.get('/albums/:album_id', function(request, response) {
  response.render('album')
})

module.exports = router
