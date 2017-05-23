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

module.exports = router
