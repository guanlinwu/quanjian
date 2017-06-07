/**
 * 会员信息
 */

exports.getGoodsList = {
  url: '/api/services/app/Goods/GetGoodsList',
  method: 'get',
  body: {
    data:{
      totalPage: 100,
       goodsList: [{
        id: 1,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }, {
        id: 2,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }, {
        id: 3,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }, {
        id: 4,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }, {
        id: 5,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }, {
        id: 6,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }, {
        id: 7,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }, {
        id: 8,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }, {
        id: 9,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '0',
        goodsType: '本草'
      }, {
        id: 10,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '0',
        goodsType: '本草'
      }, {
        id: 11,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '0',
        goodsType: '本草'
      }, {
        id: 12,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '0',
        goodsType: '本草'
      }, {
        id: 13,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '0',
        goodsType: '本草'
      }, {
        id: 14,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }, {
        id: 15,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }]
    },
    message:'获取用户信息成功',
    success:true,
    error:null
  },
  callbackData(data, req, res) {
    let _data = data,
    query = req.query,
    page  = (query && query.page) || 1;
    return _data;
  }
};

/**
 * 获取单个用户信息
 */

exports.getGoodsItem = {
  url: '/api/services/app/Goods/GetGoodsItem',
  method: 'get',
  body: {
    data: {
      totalPage: 1,
      goods: {
        id: 1,
        number: '0123',
        name: '麦芽精',
        standard: '10包/盒',
        price: '200',
        converRate: '0.9',
        credit: '200',
        isSpecial: '1',
        goodsType: '本草'
      }
    },
    message:'获取单个产品信息成功',
    success:true,
    error:null
  },
  callbackData(data, req, res) {
    let _data = data,
    query = req.query,
    id  = (query && query.id) || 1;
    let nameArr = ['草本', '麦芽', '牛奶'];
    _data.data.goods.id = id;
    _data.data.goods.name = nameArr[id-1];
    return _data;
  }
}

/**
 * 查询会员字段
 */

exports.getGoodsRecommend = {
  url: '/api/services/app/Goods/GetGoodsRecommend',
  method: 'get',
  body: {
    data: {
      recommends: [
        { value: '草本', id: '1' },
        { value: '麦芽', id: '2' },
        { value: '牛奶', id: '3' }
      ]
    },
    message:'查询产品信息成功',
    success:true,
    error:null
  }
}

/**
 * 创建会员
 */
exports.modifyGoods = {
  url: '/api/services/app/Goods/ModifyGoods',
  method: 'post',
  body: {
    data: {
      id: 1,
      number: '0123',
      name: '麦芽精',
      standard: '10包/盒',
      price: '200',
      converRate: '0.9',
      credit: '200',
      isSpecial: '1',
      goodsType: '本草'
    },
    message:'修改产品成功',
    success:true,
    error:null
  }
}

/**
 * 修改会员
 */
exports.createGoods = {
  url: '/api/services/app/Goods/CreateGoods',
  method: 'post',
  body: {
    data: {
      id: 1,
      number: '0123',
      name: '麦芽精',
      standard: '10包/盒',
      price: '200',
      converRate: '0.9',
      credit: '200',
      isSpecial: '1',
      goodsType: '本草'
    },
    message:'创建产品成功',
    success:true,
    error:null
  }
}

/**
 * 删除会员
 */
exports.deleteGoods = {
  url: '/api/services/app/Goods/DeleteGoods',
  method: 'post',
  body: {
    data: {
      id: 1,
      number: '0123',
      name: '麦芽精',
      standard: '10包/盒',
      price: '200',
      converRate: '0.9',
      credit: '200',
      isSpecial: '1',
      goodsType: '本草'
    },
    message:'删除产品成功',
    success:true,
    error:null
  }
}
