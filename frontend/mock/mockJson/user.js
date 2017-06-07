/**
 * 会员信息
 */

exports.getUsersList = {
  url: '/api/services/app/User/GetUsersList',
  method: 'get',
  body: {
    data:{
      totalPage: 100,
       usersList: [{
        id: 1,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '充值会员',
        joinMoney: '7500',
        joinMoneyRest: '35003',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 2,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 3,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 4,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 5,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 6,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 7,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 8,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 9,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 10,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 11,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 12,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 13,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 14,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
      }, {
        id: 15,
        number: '0123',
        name: '王小虎',
        credit: '3453',
        userType: '累积会员',
        joinMoney: '7500',
        joinMoneyRest: '35004',
        accumulateCost: '3800',
        accumulateLevel: '7500',
        date: '2016-05-02',
        phone: '13589980898'
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

exports.getUsersItem = {
  url: '/api/services/app/User/GetUsersItem',
  method: 'get',
  body: {
    data: {
      totalPage: 1,
      users: {
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
    _data.data.users.id = id;
    _data.data.users.name = nameArr[id-1];
    return _data;
  }
}

/**
 * 查询会员字段
 */

exports.getUsersRecommend = {
  url: '/api/services/app/User/GetUsersRecommend',
  method: 'get',
  body: {
    data: {
      recommends: [
        { value: '特朗哥', id: '1' },
        { value: '金正哥', id: '2' },
        { value: '奥巴哥', id: '3' }
      ]
    },
    message:'查询用户信息成功',
    success:true,
    error:null
  }
}

/**
 * 创建会员
 */
exports.modifyUser = {
  url: '/api/services/app/User/ModifyUser',
  method: 'post',
  body: {
    data: {
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
    },
    message:'修改会员成功',
    success:true,
    error:null
  }
}

/**
 * 修改会员
 */
exports.createUser = {
  url: '/api/services/app/User/CreateUser',
  method: 'post',
  body: {
    data: {

    },
    message:'创建会员成功',
    success:true,
    error:null
  }
}

/**
 * 删除会员
 */
exports.deleteUser = {
  url: '/api/services/app/User/DeleteUser',
  method: 'post',
  body: {
    data: {

    },
    message:'删除会员成功',
    success:true,
    error:null
  }
}
