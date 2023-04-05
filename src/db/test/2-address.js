/**
 * @description 地址数据操作
 */

const Address = require('../../models/Address')

  !(async () => {
    // 创建收货地址
    // await Address.create({
    //   username: 'zhangsan',
    //   city: '北京市',
    //   department: 'xxx小区',
    //   houseNumber: '10栋503',
    //   name: '张三',
    //   phone: '18577778888'
    // })

    // await Address.create({
    //   username: 'zhangsan',
    //   city: '北京市',
    //   department: 'yyy小区',
    //   houseNumber: '13栋204',
    //   name: '李四',
    //   phone: '18344478848'
    // })

    // 获取收货地址列表
    // const addressList = await Address.find({
    //   username: 'zhangsan'
    // }).sort({
    //   _id: -1
    // })
    // console.log(addressList)

    // 根据 id 获取单个收货地址
    // const id = '642c23fbb2dfa6142585d567'
    // const address = await Address.findById(id)
    // console.log(address)

    // 更新收货地址
    // const id = '642c23fbb2dfa6142585d567'
    // const newData = {
    //   username: 'zhangsan',
    //   city: '北京市',
    //   department: 'zzz小区',
    //   houseNumber: '3单元303',
    //   name: '王先生',
    //   phone: '13654521894'
    // }
    // const newAddress = await Address.findOneAndUpdate({
    //   _id: id,
    //   username: 'zhangsan'
    // }, newData, {
    //   new: true // 返回更新后的数据
    // })
    // console.log(newAddress)
  })()