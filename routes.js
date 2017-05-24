const express = require('express')
const router = express.Router()

const artists = require('./data/artists.json')
const albums = require('./data/albums.json')


router.get('/', function(request, response) {
  response.render('index', { artists: artists })
})

router.get('/albums', function(request, response) {
  //connecting the albums.artist_id with artists
  const albumsWithArtists = albums.map((album) => {
    album.artist = artists.filter((artist) => {
      return artist.id === album.artist_id
    })[0].name
    return album
  })
  response.render('albums', {
    albums: albumsWithArtists
  })
})

router.get('/songs', function(request, response) {
  response.render('songs')
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
