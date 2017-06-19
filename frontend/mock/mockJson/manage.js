/**
 * 管理员接口
 */

exports.authenticate = {
  url: '/api/TokenAuth/Authenticate',
  method: 'post',
  body: {
    data: {
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ijg3OTA0OGZmLWMwYjMtOGY2YS03ZWMxLTM5ZGY0MjdkMzFkZCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMSIsInN1YiI6IjIiLCJqdGkiOiIzZjUxMDVlNS0yYjQ4LTRjNzktYjc5OS05ZWZmMjQyZWVhMDIiLCJpYXQiOjE0OTU4OTA2MjAsIm5iZiI6MTQ5NTg5MDYyMCwiZXhwIjoxNDk1OTc3MDIwLCJpc3MiOiJxdWFuamlhbiIsImF1ZCI6InF1YW5qaWFuIn0.9TfQL0sFHXZYs3dOcoj9zzexi4HXN2Me0uHCMX1kUnk',
      encryptedAccessToken: 'wNYmO41/48SHNstaLVXxHCCre29BZQl1NhC6NM3R3rzpXtPQxVzH6jEzA/QhXFN5tu6Fk7pO53uppm1mVXMZgxbyRVz26dnepi/FyB6axBY+6gq1GL+uRQgoiFUCjRN2p8w6LevViwKlHyWZZJZO1DGVSjAi1m2U+og9pkHw9/Rkp3UZ8A1gKoReYXpvXHc0KFXzGY3aUxaXUOjpNPSTn4LyfFvWqGRq42yefBXGrkBTbBN3h9UXPP+25Rfae1rBCQrd8mQ0G3JHpGlVZBMKMD5RSIjWMCe3sPKe05J4ZS4x7ipM9FJHtoJ0Ev/fvM08rDbeioKKXNqOF9YqzdChxSnpsH4gsiia6e+SRx0RP0tXH4KrmOnSpoXsFj8Ri3BuCH7xWqPIr6s98zzFXJZZsWZ1Ziv2AWAYCI2LebkzTtvL5hfUsQX3tGkBUMZN0dFWJJgpL5NOLFpKPCSq+IvExHkiGcnsa9cKYNFMMBgL+vU7v3VDflhZ8pq4oG3HBqpCwOqw6KGTmquGwuU6GrROUuiwDAabcjJ0ToGp2srWLlmODn9UG2pGyJ2/akGJ+BOaDV+/dNanSLqdto8jub2gf1IpNDbrtF9uJjLNDw65LIYAoxPUeR0t4jXf7sxkH9Eg5xgDA5sVFrtZA2HfU92SX+Z3J+l310nddirRF++6yX79Su3tNgWMCuL2MFl89LxILk5zmMvxtQQukCsa2v+aOv6J0IVL/LC214CKjGq7PLTUrar01a6x6MviRLetmqCGVpdjqajgmHCc0DIPSJLUlAszKjWOAEo+x5CL4E7LtOqpSU/bBDQE5DM52VIvpxmq9dtdEY7P05eHb/hzhptncXR2QIs7J5Pl4JOa4r/h5MT397p4gkNjejkxohAaGYI58Nwd/qFm6aHpAq0s5DqRaJppbTdAi0M0+R2X8EakmShSo6O2fyGRkOKSjFQ4xMx8qhIrUare4Saupqj4JIHZPqrkqoSTfuDGelh8F+ClvSo=',
      expireInSeconds: 86400,
      userId: 0
    },
    message : '授权成功',
    success:true,
    error:null
  }
};

exports.getManager = {
  url: '/api/services/app/Manager/GetManager',
  method: 'get',
  body: {
    data:{
      name:'admin',
      surname:'admin',
      userName:'admin',
      fullName:'admin admin',
      emailAddress:'admin@defaulttenant.com',
      isEmailConfirmed:true,
      lastLoginTime:'2017-05-27T21:10:19.606388',
      isActive:true,
      creationTime:'2017-05-22T21:19:51.261342',
      id:2
    },
    message:'获取管理员信息成功',
    success:true,
    error:null
  }
};

/**
 * 获取管理员信息列表 需要token
 */
exports.getManagersList = {
  url: '/api/services/app/Manager/GetManagersList',
  method: 'get',
  body: {
    data:{
      managersList: [{
        number: '0123',
        name: '王小虎',
        authority: '管理员'
      }, {
        number: '0123',
        name: '王小虎',
        authority: '操作员'
      }, {
        number: '0123',
        name: '王小虎',
        authority: '操作员'
      }]
    },
    message:'获取管理员信息成功',
    success:true,
    error:null
  }
};

/**
 * 查询字段
 */

exports.getManagersRecommend = {
  url: '/api/services/app/Manager/GetManagersRecommend',
  method: 'get',
  body: {
    data: {
      recommends: [
        { value: '管理员', id: '1' },
        { value: '操作员1', id: '2' },
        { value: '操作员2', id: '3' }
      ]
    },
    message:'查询用户信息成功',
    success:true,
    error:null
  }
}
