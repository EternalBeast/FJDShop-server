/**
 * @description mongoose 连接数据库
 */

const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017'
const dbName = 'jingdongdb'

mongoose.connect(`${url}/${dbName}`)
  .then(() => {
    console.log('mongoose connected!')
  })
  .catch(err => {
    console.error('connect to mongoose error!', err)
  })

module.exports = mongoose