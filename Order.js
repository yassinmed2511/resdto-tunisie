const mongoose = require('mongoose')

module.exports = mongoose.model('Order', new mongoose.Schema({
  customerName: String,
  phone: String,
  address: String,
  items: Array,
  total: Number,
  status: { type: String, default: "Pending" }
}))
