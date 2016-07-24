'use strict'
const winston = require('winston')
const express = require('express')

const PORT = 8080

const app = express()
app.use(express.static('./client/static'))

app.listen(PORT, () => {
  winston.info('listening on port', PORT)
})
