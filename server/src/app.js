const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('short'))
app.use(bodyParser.json())
app.use(cors())

app.set('view engine', 'ejs')

app.post('/register', function (req, res) {
  res.send({
    message: `Registered ${req.params.email}!`
  })
})

app.listen(process.env.PORT || 8081, x => console.log('The server is running!'))
