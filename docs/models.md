# 数据模型设计

列举各个数据模型的示例，写明属性

## 用户

```js
{
  _id: 'xxx',
  username: '18677778888',
  password: 'jjjj123'
}
```

## 地址

```js
{
  _id: 'xxx',
  username: '18677778888', // 和用户产生关联
  city: '北京',
  department: 'xx小区',
  houseNumber: '门牌号',
  name: '张三',
  phone: '15688889999'
}
```

## 商店

```js
{
  _id: 'xxx',
  name: '沃尔玛',
  imgUrl: '商店图片 url',
  sales: 10000, // 月售
  expressLimit: 0, // 起送价格
  expressPrice: 5, // 快递价格
  slogan: 'VIP尊享满89元减4元运费券'
}
```

## 商品

```js
{
  _id: '商品 id',
  shopId: '商店 id', // 和商店关联
  name: '番茄 250g / 份',
  imgUrl: '商品图片 url',
  sales: 10,
  price: 33.6,
  oldPrice: 39.6,
  tabs: ['all', 'seckill'] // 左侧 tab 类型
}
```

## 订单

```js
{
  _id: '订单 id',
  username: 'zhangsan',
  shopId: '商店的id',
  shopName: '商店名称',
  isCanceled: false, // 订单是否被取消
  address: {
    username: '18677778888',
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '15688889999'
  },
  products: [
    {
      product: {
        name: '番茄 250g / 份',
        imgUrl: '商品图片 url',
        sales: 10,
        price: 33.6,
        oldPrice: 39.6
      }
      orderSales: 3 // 该订单中该商品购买数量
    }
  ]
}
```