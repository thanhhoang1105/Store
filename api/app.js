const express = require('express')
const app = express()

const ErrorHandler = require('./middleware/error')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

// Route imports
const product = require('./routes/ProductRoute')
const user = require('./routes/UserRoute')
const order = require('./routes/OrderRoute')

app.use('/api/v1', product)

app.use('/api/v1', user)

app.use('/api/v1', order)

app.use(ErrorHandler)

module.exports = app
