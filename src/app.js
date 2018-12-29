const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const { sequelize } = require('./models')
const { userRoutes, songRoutes, bookmarkRoutes } = require('./routes')

const app = express()

// Middleware
app.use(morgan('short'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: 'http://localhost:8080' }))

// Sessions setup
app.use(session({
  store: new FileStore(),
  secret: process.env.cookieSecret,
  resave: false,
  rolling: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 3600 * 24
  }
}))
// Setup passport
require('./passport')(app)

// Routes
const path = require('path')
app.use('/', express.static(path.resolve(__dirname, 'public')))
app.use('/api', userRoutes)
app.use('/api/songs', songRoutes)
app.use('/api/bookmarks', bookmarkRoutes)

app.set('view engine', 'ejs')

sequelize.sync({ force: false })
  .then(() => {
    console.log('Done syncing!')
  })

app.listen(process.env.PORT || 8081, x => console.log('The server is running!'))
