/**
 * @description Product Model
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  shopId: {
    type: String,
    required: true
  },
  name: String,
  imgUrl: String,
  sales: Number,
  price: Number,
  oldPrice: Number,
  tabs: [String] // 示例 ['all', 'seckill']
}, {
  timestamps: true
})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product