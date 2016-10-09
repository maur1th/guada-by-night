const mongoose = require('mongoose')
const { Schema } = mongoose


mongoose.connect('mongodb://mongo:27017')


const Event = mongoose.model('Event', new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: false },
  tags: { type: [String], required: false },
}))


module.exports = { Event }
