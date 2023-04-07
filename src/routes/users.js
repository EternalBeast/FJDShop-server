const router = require('koa-router')()
const {
  register,
  login
} = require('../controller/user')
const {
  SuccessModel,
  ErrorModel
} = require('../res-model/index')
const loginCheck = require('../middlewares/loginCheck')

router.prefix('/api/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

// 用户注册
router.post('/register', async (ctx, next) => {
  const {
    username,
    password
  } = ctx.request.body

  // 新建用户
  try {
    const newUser = await register(username, password)
    ctx.body = new SuccessModel(newUser)
  } catch (error) {
    console.error('注册失败', error)
    ctx.body = new ErrorModel(10001, `注册失败 - ${error.message}`)
  }
})

// 登录
router.post('/login', async (ctx, next) => {
  const {
    username,
    password
  } = ctx.request.body

  // 查询用户
  const res = await login(username, password)
  if (res) {
    // 登录成功

    // 设置 session
    ctx.session.userInfo = {
      username
    }

    ctx.body = new SuccessModel()
  } else {
    // 登录失败
    ctx.body = new ErrorModel(10002, '登录验证失败')
  }
})

// 获取用户信息
router.get('/info', loginCheck, async (ctx, next) => {
  const {
    username
  } = ctx.session.userInfo

  ctx.body = new SuccessModel({
    username,
    id: '1069643013',
    star: 16,
    redPacket: 218,
    coupon: 12,
    beans: 88,
    blankNote: 1000
  })
})

module.exports = router