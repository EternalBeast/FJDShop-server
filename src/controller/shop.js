/**
 * @description shop controller
 */

const Shop = require('../models/Shop')
const Product = require('../models/Product')

/**
 * 获取附近（热门）商店列表
 */
async function getHotList() {
  const hotList = await Shop.find().sort({ _id: -1 })
  return hotList
}

/**
 * 通过 id 获取商店详情
 * @param {String} id id
 */
async function getShopById(id) {
  const shop = await Shop.findById(id)
  return shop
}

/**
 * 通过商店 id 和 tab 获取商品列表
 * @param {String} shopId 商店 id
 * @param {String} tab tab标签
 */
async function getProductsByShopId(shopId, tab = 'all') {
  const productList = await Product.find({
    shopId,
    tabs: {
      $in: tab
    }
  })
  return productList
}

module.exports = {
  getHotList,
  getShopById,
  getProductsByShopId
}