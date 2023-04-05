const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const session = require('koa-generic-session')

const index = require('./routes/index')
const users = require('./routes/users')
const addressRouter = require('./routes/address')
const shopRouter = require('./routes/shop')
const orderRouter = require('./routes/order')

// error handler
onerror(app)

// 服务端支持跨域
app.use(cors({
  origin: 'http://localhost:8080', // 支持前端哪个域可以跨域
  credentials: true // 支持跨域携带 cookie
}))

// 配置session
app.keys = ['jfie&nigJIEGN', 'FJEI*FJ8ejfn*&kfe'] // 秘钥，用于加密
app.use(session({
  // 配置 cookie
  cookies: {
    path: '/', // 根路径下有效
    httpOnly: true, // 只允许服务端操作 cookie
    maxAge: 24 * 60 * 60 * 1000 // cookie 过期时间
  }
}))

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(addressRouter.routes(), addressRouter.allowedMethods())
app.use(shopRouter.routes(), shopRouter.allowedMethods())
app.use(orderRouter.routes(), orderRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app