import * as http from "http"
import * as express from "express"

const app = express()


// Init API endpoint

const api = express.Router()
app.use('/api', api)


// Serve /events route

api.get('/events', (req, res) => {
  res.json({ message: "hello" })
})

api.post('/events', (req, res) => {
  res.json({ message: "hello" })
})


// Serve /events/:id route

api.get('/events/:id', (req, res) => {
  res.json({ message: `you got message ${req.params.id}` })
})

api.put('/events/:id', (req, res) => {
  res.json({ message: `you got message ${req.params.id}` })
})

api.delete('/events/:id', (req, res) => {
  res.json({ message: `you got message ${req.params.id}` })
})


// Listen

app.listen(3000, () => {
  console.log('server started')
})
