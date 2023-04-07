/**
 * @description shop controller
 */

const Shop = require('../models/Shop')
const Product = require('../models/Product')
const HotWord = require('../models/HotWord')

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

/**
 * 获取热搜词
 */
async function getHotWords() {
  const hotWords = await HotWord.findOne({ name: 'words' })
  console.log(hotWords)
  return hotWords.data
}

/**
 * 获取搜索列表页
 * @param {String} keyword 搜索词
 */
async function getSearchList(keyword = '') {
  // 根据搜索词获取所有匹配商品
  const reg = new RegExp(keyword)
  const products = await Product.find({ name: reg })

  // 获取匹配商品所属的商店 id
  const shopIds = Array.from(new Set(products.map(p => p.shopId)))

  // 获取商店信息
  const shops = await Shop.find({ _id: {
    $in: shopIds
  } })

  // console.log(shops)

  // 得到带商品列表的商品详情
  // 这里使用 map 时会返回 promise
  const shopList = []
  for (const shop of shops) {
    const products = await getProductsByShopId(shop._id)

    // 直接展开会得到 _doc 等三个属性，实际数据在 _doc 中
    shopList.push({
      ...shop._doc,
      products
    })
  }
  // console.log(shopList)

  return shopList
}

module.exports = {
  getHotList,
  getShopById,
  getProductsByShopId,
  getHotWords,
  getSearchList
}