/**
 * 报积分信息
 */

exports.getCreditList = {
  url: '/api/services/app/Credit/GetCreditList',
  method: 'get',
  body: {
    data:{
      totalPage: 100,
       creditList: [{
        id: 1,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 2,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 3,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 4,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 5,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 6,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 7,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 8,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 9,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 10,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 11,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 12,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 13,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 14,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }, {
        id: 15,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        date: '2016-05-02'
      }]
    },
    message:'获取报积分信息成功',
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

exports.getCreditItem = {
  url: '/api/services/app/Credit/GetCreditItem',
  method: 'get',
  body: {
    data: {
      totalPage: 1,
      credit: {
        id: 1,
        number: '0123',
        name: 'xx哥',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '750000',
        joinMoneyRest: '35000000',
        accumulateCost: '3800000',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }
    },
    message:'获取单个用户信息成功',
    success:true,
    error:null
  },
  callbackData(data, req, res) {
    let _data = data,
    query = req.query,
    id  = (query && query.id) || 1;
    let nameArr = ['特朗哥', '金正哥', '奥巴哥'];
    _data.data.credit.id = id;
    _data.data.credit.name = nameArr[id-1];
    return _data;
  }
}

/**
 * 查询字段
 */

exports.getCreditRecommend = {
  url: '/api/services/app/Credit/GetCreditRecommend',
  method: 'get',
  body: {
    data: {
      recommends: [
        { value: '特朗哥', id: '1' },
        { value: '金正哥', id: '2' },
        { value: '奥巴哥', id: '3' }
      ]
    },
    message:'查询用户报积分信息成功',
    success:true,
    error:null
  }
}

/*
 * 修改 积分
 */
exports.modifyCredit = {
  url: '/api/services/app/Credit/ModifyCredit',
  method: 'post',
  body: {
    data: {
      id: 1,
      number: '0123',
      name: 'xx哥',
      credit: '3453'
    },
    message:'修改积分成功',
    success:true,
    error:null
  }
}
