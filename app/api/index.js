'use strict'
const winston = require('winston')
const express = require('express')
const bodyParser = require('body-parser')
const { Event } = require('./models')


winston.level = 'silly'
const PORT = 3000


// Init and conf app

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Serve /events route

app.get('/events', (req, res) => {
  Event.find( (err, events) => {
    if (err) return winston.error('GET /events', JSON.stringify(err))
    res.json(events)
  })
})

app.post('/events', (req, res) => {
  winston.verbose('POST /events', {body: req.body})
  const evt = new Event(req.body)
  evt.save( (err, evt) => {
    if (err) return winston.error('POST /events', JSON.stringify(err))
    res.json(evt)
  })
})


// Serve /events/:id route

app.get('/events/:id', (req, res) => {
  res.json({ message: `you got message ${req.params.id}` })
})

app.put('/events/:id', (req, res) => {
  res.json({ message: `you got message ${req.params.id}` })
})

app.delete('/events/:id', (req, res) => {
  res.json({ message: `you got message ${req.params.id}` })
})


app.listen(PORT, () => {
  winston.info(`listening on ${PORT}`)
})
