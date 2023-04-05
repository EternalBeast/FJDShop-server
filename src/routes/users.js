const router = require('koa-router')()
const {
  register,
  login
} = require('../controller/user')
const {
  SuccessModel,
  ErrorModel
} = require('../res-model/index')

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
    ctx.session.userInfo = { username }
    
    ctx.body = new SuccessModel()
  } else {
    // 登录失败
    ctx.body = new ErrorModel(10002, '登录验证失败')
  }
})

module.exports = router