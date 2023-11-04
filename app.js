const express = require('express')
const jobRouter = require('./routes/jobRouter')

const app = express()

app.use('/api/jobs', jobRouter)

module.exports = app
