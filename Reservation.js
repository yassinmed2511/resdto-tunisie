const mongoose = require('mongoose')

module.exports = mongoose.model('Reservation', new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  guests: Number
}))
