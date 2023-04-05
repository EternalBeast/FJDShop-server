/**
 * @description address controller
 */

const Address = require('../models/Address')

/**
 * 创建收货地址
 * @param {String} username 用户名
 * @param {Object} data 地址详细信息
 */
async function createAddress(username, data) {
  const address = await Address.create({
    username,
    ...data
  })
  return address
}

/**
 * 获取收货地址列表
 * @param {String} username 用户名
 */
async function getAddressList(username) {
  const addressList = await Address.find({
    username
  }).sort({
    updatedAt: -1
  })
  return addressList
}

/**
 * 通过 id 查询单个收货地址
 * @param {String} id id
 */
async function getAddressById(id) {
  const address = await Address.findById(id)
  return address
}

/**
 * 更新收货地址
 * @param {String} id id
 * @param {String} username 用户名
 * @param {Object} data 新的收货地址的详细信息
 */
async function updateAddress(id, username, data) {
  const newAddress = await Address.findOneAndUpdate({
      _id: id,
      username
    }, // 查询条件
    {
      username,
      ...data
    }, // 新数据
    {
      new: true
    } // 配置，返回更新后的数据
  )
  return newAddress
}

module.exports = {
  createAddress,
  getAddressList,
  getAddressById,
  updateAddress
}