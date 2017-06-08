/**
 * 报积分信息
 */

exports.getStockList = {
  url: '/api/services/app/Stock/GetStockList',
  method: 'get',
  body: {
    data:{
      totalPage: 100,
       stockList: [
       {
          id: 1,
          number: '0123',
          name: 'xxx',
          stock: '3453'
        }, {
          id: 2,
          number: '0123',
          name: 'xxx',
          stock: '3453'
        }, {
          id: 3,
          number: '0123',
          name: 'xxx',
          stock: '3453'
        }, {
          id: 3,
          number: '0123',
          name: 'xxx',
          stock: '3453'
        }, {
          id: 3,
          number: '0123',
          name: 'xxx',
          stock: '3453'
        }, {
          id: 3,
          number: '0123',
          name: 'xxx',
          stock: '3453'
        }
       ]
    },
    message:'获取库存信息成功',
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
 * 获取单个信息
 */

exports.getStockItem = {
  url: '/api/services/app/Stock/GetStockItem',
  method: 'get',
  body: {
    data: {
      totalPage: 1,
      stock: {
        id: 1,
        number: '0123',
        name: 'xxx',
        stock: '3453'
      }
    },
    message:'获取单个产品库存信息成功',
    success:true,
    error:null
  },
  callbackData(data, req, res) {
    let _data = data,
    query = req.query,
    id  = (query && query.id) || 1;
    let nameArr = ['a', 'v', 's'];
    _data.data.stock.id = id;
    _data.data.stock.name = nameArr[id-1];
    return _data;
  }
}

/**
 * 查询字段
 */

exports.getStockRecommend = {
  url: '/api/services/app/Stock/GetStockRecommend',
  method: 'get',
  body: {
    data: {
      recommends: [
        { value: 'a', id: '1' },
        { value: 'v', id: '2' },
        { value: 's', id: '3' }
      ]
    },
    message:'查询产品库存信息成功',
    success:true,
    error:null
  }
}

/*
 * 修改 积分
 */
exports.modifyStock = {
  url: '/api/services/app/Stock/ModifyStock',
  method: 'post',
  body: {
    data: {
      id: 1,
      number: '0123',
      name: 'xxx',
      stock: '3453'
    },
    message:'修改库存成功',
    success:true,
    error:null
  }
}
