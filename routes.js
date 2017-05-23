const express = require('express')
const router = express.Router()

router.get('/', function(request, response) {
  response.render('index')
})

router.get('/albums', function(request, response) {
  response.render('albums')
})

router.get('/songs', function(request, response) {
  response.render('songs')
})

router.get('/artists/:artist_id', function(request, response) {
  response.render('artist')
})

router.get('/albums/:album_id', function(request, response) {
  response.render('album')
})

module.exports = router
