/**
 * @description order router
 */

const router = require('koa-router')()

const {
  createOrder,
  getOrderList
} = require('../controller/order')
const loginCheck = require('../middlewares/loginCheck')
const {
  SuccessModel,
  ErrorModel
} = require('../res-model/index')

router.prefix('/api/order')

// 创建订单
router.post('/', loginCheck, async (ctx, next) => {
  // 获取用户名
  const {
    username
  } = ctx.session.userInfo
  // 获取订单数据
  const data = ctx.request.body

  // 创建订单
  try {
    const newOrder = await createOrder(username, data)
    ctx.body = new SuccessModel(newOrder)
  } catch (error) {
    console.error('创建订单失败', error)
    ctx.body = new ErrorModel(10006, '创建订单失败')
  }
})

// 获取订单列表
router.get('/', loginCheck, async (ctx, next) => {
  // 获取用户名
  const {
    username
  } = ctx.session.userInfo

  // 获取订单列表
  const orderList = await getOrderList(username)
  ctx.body = new SuccessModel(orderList)
})

module.exports = router