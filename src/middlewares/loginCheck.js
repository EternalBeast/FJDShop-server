/**
 * @description 登录验证中间件
 */

const { ErrorModel } = require('../res-model/index')

module.exports = async (ctx, next) => {
  const session = ctx.session
  // 验证成功
  if (session && session.userInfo) {
    await next()
    return
  }
  // 验证失败
  ctx.body = new ErrorModel(10003, '用户未登录')
  // ctx.body = {
  //   error: -1,
  //   message: '用户未登录！'
  // }
}