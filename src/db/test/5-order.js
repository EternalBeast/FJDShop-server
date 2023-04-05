/**
 * @description 订单数据操作
 */

const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')

  !(async () => {
    // // 获取 requestBody
    // const requestBody = {
    //   addressId: '642c23fbb2dfa6142585d567',
    //   shopId: '642cd7882ee8487d726c2559',
    //   shopName: '沃尔玛',
    //   isCanceled: false, // 订单是否被取消
    //   products: [{
    //       id: '642cf06e2e244bfad95f7302',
    //       num: 3 // 购买数量
    //     },
    //     {
    //       id: '642cf06e2e244bfad95f7305',
    //       num: 5 // 购买数量
    //     },
    //     {
    //       id: '642cf06e2e244bfad95f7309',
    //       num: 2 // 购买数量
    //     }
    //   ]
    // }

    // // 获取 address
    // const address = await Address.findById(requestBody.addressId)

    // // 获取 products
    // const pIds = requestBody.products.map(p => p.id)
    // const productList = await Product.find({
    //   shopId: requestBody.shopId,
    //   _id: {
    //     $in: pIds
    //   }
    // })

    // // 整合订单购买数量
    // const products = productList.map(p => {
    //   // 商品 id
    //   const id = p._id.toString()

    //   // 找到商品购买数量
    //   const filterProducts = requestBody.products.filter(item => item.id === id)
    //   if (filterProducts.length === 0) {
    //     throw Error('未找到匹配的销量数据')
    //   }

    //   return {
    //     product: p,
    //     orderSales: filterProducts[0].num
    //   }
    // })

    // // 创建订单
    // await Order.create({
    //   username: 'zhangsan',
    //   shopId: requestBody.shopId,
    //   shopName: requestBody.shopName,
    //   isCanceled: requestBody.isCanceled,
    //   address,
    //   products
    // })
  })()