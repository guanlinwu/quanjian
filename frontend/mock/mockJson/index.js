// 假数据 success，msg，data，error
/**
 * 所有接口都由此文件导出
 */
let {authenticate, getManager} = require('./manage.js'),
  {getUsersList} = require('./user.js')

exports.authenticate = authenticate;
exports.getManager = getManager;

exports.getUsersList = getUsersList;
