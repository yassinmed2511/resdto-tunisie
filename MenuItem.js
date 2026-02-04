const mongoose = require('mongoose')

module.exports = mongoose.model('MenuItem', new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  image: String
}))
