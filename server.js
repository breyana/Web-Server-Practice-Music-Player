const express = require('express')
const app = express()

app.get('/', function (request, response) {
  response.send('Hello Worrrrrrld')
})

app.use(express.static('public'))

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
