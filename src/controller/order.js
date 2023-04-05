/**
 * @description shop controller
 */

const Order = require('../models/Order')
const Address = require('../models/Address')
const Product = require('../models/Product')

/**
 * 创建订单
 * @param {String} username 用户名
 * @param {Object} data request 中的订单数据 
 */
async function createOrder(username, data) {
  const {
    addressId,
    shopId,
    shopName,
    isCanceled
  } = data

  // 获取地址信息
  const address = await Address.findById(addressId)

  // 获取商品 id 数组
  const pIds = data.products.map(p => p.id)
  // 获取商品列表
  const productList = await Product.find({
    shopId,
    _id: {
      $in: pIds
    }
  })
  // 商品列表整合购买数量
  const products = productList.map(p => {
    // 获取商品 id
    const id = p._id.toString()
    // 获取 data.products 中 id 匹配的对象
    const filterProducts = data.products.filter(item => item.id === id)
    if (filterProducts.length === 0) {
      throw Error('未找到匹配的销量数据')
    }
    // 获取购买数量
    const num = filterProducts[0].num

    return {
      product: p,
      orderSales: num
    }
  })

  // 创建订单
  const newOrder = await Order.create({
    username,
    shopId,
    shopName,
    isCanceled,
    address,
    products
  })
  return newOrder
}

/**
 * 获取用户的订单列表
 * @param {String} username 用户名
 */
async function getOrderList(username) {
  const orderList = await Order.find({
    username
  }).sort({
    _id: -1
  })
  return orderList
}

module.exports = {
  createOrder,
  getOrderList
}