/**
 * @description Shop Model
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema

const ShopSchema = new Schema({
  name: String,
  imgUrl: String,
  sales: Number,
  expressLimit: {
    type: Number,
    default: 0
  },
  expressPrice: Number,
  slogan: String
}, {
  timestamps: true
})

const Shop = mongoose.model('shop', ShopSchema)

module.exports = Shop