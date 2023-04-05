/**
 * @description Address Model
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema

const AddressSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  city: String,
  department: String,
  houseNumber: String,
  name: String,
  phone: String
}, {
  timestamps: true
})

const Address = mongoose.model('address', AddressSchema)

module.exports = Address