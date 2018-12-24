const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const { sequelize } = require('./models')

const { userRoutes, songRoutes, bookmarkRoutes } = require('./routes')

const app = express()

// Middleware
app.use(morgan('short'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use('/', userRoutes)
app.use('/songs', songRoutes)
app.use('/bookmarks', bookmarkRoutes)

app.set('view engine', 'ejs')

sequelize.sync({ force: false })
  .then(() => {
    console.log('Done syncing!')
  })

app.listen(process.env.PORT || 8081, x => console.log('The server is running!'))
