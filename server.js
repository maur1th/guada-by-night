'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome :)'})
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)
