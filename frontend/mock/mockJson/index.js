// 假数据 success，msg，data，error
/**
 * 所有接口都由此文件导出
 */
let manage = require('./manage.js'),
    user = require('./user.js')

let mockJson = Object.assign({}, manage, user);

// 把key接入到exports
for (let key in mockJson) {
  if (mockJson.hasOwnProperty(key)) {
    let element = mockJson[key];
    exports[key] = element;
  }
}


