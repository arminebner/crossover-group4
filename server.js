require('dotenv').config()
const express = require('express')

const cors = require('cors')
const connectDB = require('./dbinit')
const restaurants = require('./api/restaurants')
const tags = require('./api/tags')
const cities = require('./api/cities')
const errorHandler = require('./middleware/error')

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(cors())

app.use(express.json())
app.get('/', (req, res) => res.send('Hey guys'))
app.use('/restaurants', restaurants)
app.use('/tags', tags)
app.use('/cities', cities)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Started server on port ${PORT}`))
