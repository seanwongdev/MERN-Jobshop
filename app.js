const express = require('express')
const jobRouter = require('./routes/jobRouter')
const errorHandler = require('./controllers/errorController')

const app = express()
app.use(express.json());

app.use('/api/jobs', jobRouter)

app.use(errorHandler)

module.exports = app
