/**
 * @description shop router
 */

const router = require('koa-router')()

const {
  SuccessModel,
  ErrorModel
} = require('../res-model/index')
const {
  getHotList,
  getShopById,
  getProductsByShopId
} = require('../controller/shop')

router.prefix('/api/shop')

// 附近（热门）商店
router.get('/hot-list', async (ctx, next) => {
  const hotList = await getHotList()
  ctx.body = new SuccessModel(hotList)
})

// 商店详情
router.get('/:id', async (ctx, next) => {
  // 获取商店 id
  const id = ctx.params.id
  // 通过 id 查找获取商店详情数据
  const shop = await getShopById(id)
  ctx.body = new SuccessModel(shop)
})

// 查询某个商店的商品列表
router.get('/:id/products', async (ctx, next) => {
  // 获取商店 id
  const id = ctx.params.id
  // 获取 tab
  const tab = ctx.query.tab || 'all'
  // 获取商品列表
  const productList = await getProductsByShopId(id, tab)
  ctx.body = new SuccessModel(productList)
})

module.exports = router