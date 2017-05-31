// 假数据 success，msg，data，error
/**
 * 所有接口都由此文件导出
 */
let {Authenticate, GetUsers} = require('./manage.js');

exports.Authenticate = Authenticate;
exports.GetUsers = GetUsers;
