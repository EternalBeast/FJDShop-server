# API 设计

## 注册

### url 

`/api/user/register`

### method 

`post`

### request body

```js
{
  username: '18614951291',
  password: 'jifen123456'
}
```

### response body

```js
{
  errno: 0,
  message: 'errno !== 0 时的错误信息'
}
```

## 登录

### url 

`/api/user/login`

### method 

`post`

### request body

```js
{
  username: '18614951291',
  password: 'jifen123456'
}
```

### response body

```js
{
  errno: 0,
  message: 'errno !== 0 时的错误信息'
}
```

## 获取用户信息

### url 

`/api/user/info`

### method 

`get`

### request body

无

### response body

```js
{
  username: '热心市民李先生',
  id: '1069643013',
  star: 16,
  redPacket: 218,
  coupon: 12,
  beans: 88,
  blankNote: 1000
}
```

## 创建收货地址

### url 

`/api/user/address`

### method 

`post`

### request body

```js
{
  city: '北京',
  department: 'xx小区',
  houseNumber: '门牌号',
  name: '张三'，
  phone: '18577788856'
}
```

### response body

```js
{
  errno: 0,
  data: {
    _id: '收货地址的 id',
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三'，
    phone: '18577788856',
    createdAt: Date,
    updatedAt: Date
  }
  message: 'errno !== 0 时的错误信息'
}
```

## 获取收货地址列表

### url 

`/api/user/address`

### method 

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data: [
    {
      _id: '收货地址的 id',
      city: '北京',
      department: 'xx小区',
      houseNumber: '门牌号',
      name: '张三'，
      phone: '18577788856',
    }
  ],
  message: 'errno !== 0 时的错误信息'
}
```

## 获取单个收货地址

### url 

`/api/user/address/:id`

示例：`/api/user/address/100` `/api/user/address/101`

### method 

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data: {
      _id: '收货地址的 id',
      city: '北京',
      department: 'xx小区',
      houseNumber: '门牌号',
      name: '张三'，
      phone: '18577788856',
  },
  message: 'errno !== 0 时的错误信息'
}
```

## 更新收货地址

### url 

`/api/user/address/:id`

示例：`/api/user/address/100` `/api/user/address/101`

### method 

`patch`

### request body

```js
{
  city: '北京',
  department: 'xx小区',
  houseNumber: '门牌号',
  name: '张三'，
  phone: '18577788856'
}
```

### response body

```js
{
  errno: 0,
  message: 'errno !== 0 时的错误信息'
}
```

## 附近（热门）商店

### url

`/api/shop/hot-list`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data: [
    {
      _id: '商店 id',
      name: '沃尔玛',
      imgUrl: '商店图片 url',
      sales: 10000, // 月售
      expressLimit: 0, // 起送价格
      expressPrice: 5, // 快递价格
      slogan: 'VIP尊享满89元减4元运费券'
    },
    {
      _id: '商店 id',
      name: '山姆会员商店',
      imgUrl: '商店图片 url',
      sales: 2000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: '联合利华洗护满10减5'
    }
  ],
  message: 'errno !== 0 时的错误信息'
}
```

## 商店详情

### url

`/api/shop/:id`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data: {
      _id: '商店 id',
      name: '沃尔玛',
      imgUrl: '商店图片 url',
      sales: 10000, // 月售
      expressLimit: 0, // 起送价格
      expressPrice: 5, // 快递价格
      slogan: 'VIP尊享满89元减4元运费券'
  },
  message: 'errno !== 0 时的错误信息'
}
```

## 查询某个商店的商品列表

### url

`/api/shop/:id/products`

### query

`tab=all`

示例：`/api/shop/10/products?tab=all`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data: [
        {
          _id: '商品 id',
          name: '番茄 250g / 份',
          imgUrl: '商品图片 url',
          sales: 10,
          price: 33.6,
          oldPrice: 39.6
        },
        {
          _id: '商品 id',
          name: '车厘子 500g / 份',
          imgUrl: '商品图片 url',
          sales: 10,
          price: 99.6,
          oldPrice: 119.6
        }
  ],
  message: 'errno !== 0 时的错误信息'
}
```

## 获取热搜词

### url

`/api/shop/:id/products`

### query

`tab=all`

示例：`/api/shop/search/hot-words`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data: [
    "尖椒肉丝",
    "番茄",
    "草莓",
    "橙子",
    "鲜花",
    "山姆会员商店",
    "新鲜水果",
    "牛奶",
    "香槟玫瑰",
    "生日鲜花",
    "酸奶",
  ],
  message: 'errno !== 0 时的错误信息'
}
```

## 搜索列表页

### url

`/api/shop/search/searchlist`

### query

`keyword=番茄`

示例：`/api/shop/search/searchlist?keyword=番茄`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data: [
    {
    _id: '1',
    name: '沃尔玛',
    imgUrl: '',
    sales: 10000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: 'VIP尊享满89元减4元运费券',
    products: [{
        name: '番茄 250g / 份',
        imgUrl: '',
        price: 33.6,
        oldPrice: 39.6
      },
      {
        name: '车厘子 500g / 份',
        imgUrl: '',
        price: 99.6,
        oldPrice: 119.6
      },
      {
        name: '橙子 500g/份',
        imgUrl: '',
        price: 12.6,
        oldPrice: 22.6
      }
    ]
  }
  ],
  message: 'errno !== 0 时的错误信息'
}
```

## 创建订单

### url

`/api/order`

### method

`post`

### request body

```js
{
  addressId: '收货地址的 id',
  shopId: '商店的id',
  shopName: '商店名称',
  isCanceled: false, // 订单是否被取消
  products: [
    {
      id: '商品 id',
      num: 3 // 购买数量
    }
  ]
}
```

### response body

```js
{
  errno: 0,
  data: {
    _id: '订单 id'
  },
  message: 'errno !== 0 时的错误信息'
}
```

## 获取订单列表

### url

`/api/order`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data: [
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
  ],
  message: 'errno !== 0 时的错误信息'
}
```
