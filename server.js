const express = require('express')
const app = express()
const routes = require('./routes')

app.set('view engine', 'ejs')

app.use('/', routes)

app.use(express.static('public'))

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
