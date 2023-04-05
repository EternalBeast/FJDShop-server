/**
 * @description address router
 */

const router = require('koa-router')()

const {
  SuccessModel,
  ErrorModel
} = require('../res-model/index')
const loginCheck = require('../middlewares/loginCheck')
const { createAddress, getAddressList, getAddressById, updateAddress } = require('../controller/address')

router.prefix('/api/user/address')

// 创建收货地址
router.post('/', loginCheck, async (ctx, next) => {
  // 获取地址信息
  const data = ctx.request.body

  // 获取登录用户信息
  const { username } = ctx.session.userInfo

  // 创建数据
  try {
    const address = await createAddress(username, data)
    ctx.body = new SuccessModel(address)
  } catch (error) {
    console.error('创建地址失败', error)
    ctx.body = new ErrorModel(10004, `创建收货地址失败`)
  }
})

// 获取收货地址列表
router.get('/', loginCheck, async (ctx, next) => {
  // 获取登录用户信息
  const { username } = ctx.session.userInfo

  // 查找地址列表
  const addressList = await getAddressList(username)
  ctx.body = new SuccessModel(addressList)
})

// 获取单个收货地址
router.get('/:id', loginCheck, async (ctx, next) => {
  // 获取 id
  const id = ctx.params.id

  // 通过 id 查询地址
  const address = await getAddressById(id)

  ctx.body = new SuccessModel(address)
})

// 更新收货地址
router.patch('/:id', loginCheck, async (ctx, next) => {
  // 获取 id
  const id = ctx.params.id

  // 获取新的收货地址信息
  const data = ctx.request.body

  // 获取登录用户信息
  const { username } = ctx.session.userInfo

  // 更新数据
  try {
    const newAddress = await updateAddress(id, username, data)
    ctx.body = new SuccessModel(newAddress)
  } catch (error) {
    console.error('更新失败', error)
    ctx.body = new ErrorModel(10005, '更新失败')
  }
  
})

module.exports = router