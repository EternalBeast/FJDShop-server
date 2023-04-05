/**
 * @description User Model
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true, // 必须
    unique: true // 唯一，不可重复
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true // 自动添加时间戳
})

const User = mongoose.model('user', UserSchema)

module.exports = User