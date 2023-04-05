/**
 * @description 商品数据操作
 */

const Product = require('../../models/Product')

!(async () => {
  // // 创建商品
  // await Product.create({
  //   shopId: '642cd7882ee8487d726c2559', // 沃尔玛
  //   name: '番茄 250g / 份',
  //   imgUrl: '/images/product/tomato.png',
  //   sales: 10,
  //   price: 33.6,
  //   oldPrice: 39.6,
  //   tabs: ['all', 'seckill']
  // })

  // // 创建商品
  // await Product.create({
  //   shopId: '642cd7882ee8487d726c2559', // 沃尔玛
  //   name: '车厘子 500g / 份',
  //   imgUrl: '/images/product/cherry.png',
  //   sales: 10,
  //   price: 99.6,
  //   oldPrice: 119.6,
  //   tabs: ['all', 'seckill', 'fruit']
  // })

  // // 创建商品
  // await Product.create({
  //   shopId: '642cd7882ee8487d726c2559', // 沃尔玛
  //   name: '橙子 500g/份',
  //   imgUrl: '/images/product/orange.png',
  //   sales: 110,
  //   price: 12.6,
  //   oldPrice: 22.6,
  //   tabs: ['all', 'seckill', 'fruit']
  // })

  // // 创建商品
  // await Product.create({
  //   shopId: '642cd7882ee8487d726c2559', // 沃尔玛
  //   name: '帝王蟹 250g / 份',
  //   imgUrl: '/images/product/crab.png',
  //   sales: 10,
  //   price: 199.9,
  //   oldPrice: 299.9,
  //   tabs: ['all', 'seckill']
  // })

  // // 创建商品
  // await Product.create({
  //   shopId: '642cd7882ee8487d726c255c', // 山姆会员商店
  //   name: '葡萄 250g / 份',
  //   imgUrl: '/images/product/grape.jpg',
  //   sales: 100,
  //   price: 33,
  //   oldPrice: 36,
  //   tabs: ['all', 'seckill', 'fruit']
  // })

  // // 创建商品
  // await Product.create({
  //   shopId: '642cd7882ee8487d726c255c', // 山姆会员商店
  //   name: '苹果 250g / 份',
  //   imgUrl: '/images/product/apple.jpeg',
  //   sales: 200,
  //   price: 25,
  //   oldPrice: 27,
  //   tabs: ['all', 'seckill', 'fruit']
  // })

  // // 创建商品
  // await Product.create({
  //   shopId: '642cd7882ee8487d726c255c', // 山姆会员商店
  //   name: '桃子 250g / 份',
  //   imgUrl: '/images/product/peach.jpg',
  //   sales: 50,
  //   price: 16,
  //   oldPrice: 19,
  //   tabs: ['all', 'seckill', 'fruit']
  // })

  // // 创建商品
  // await Product.create({
  //   shopId: '642cd7882ee8487d726c255c', // 山姆会员商店
  //   name: '西瓜 500g / 份',
  //   imgUrl: '/images/product/watermelon.jpg',
  //   sales: 180,
  //   price: 13,
  //   oldPrice: 15,
  //   tabs: ['all', 'seckill', 'fruit']
  // })

  // // 查询某个商店的商品列表
  // const list = await Product.find({
  //   shopId: '642cd7882ee8487d726c2559',
  //   // tabs数组中包含 'fruit'
  //   tabs: {
  //     $in: 'fruit'
  //   }
  // })
  // console.log(list)
})()