// 假数据 success，msg，data，error
/**
 * 所有接口都由此文件导出
 */
let fs = require('fs');

let fileArr = fs.readdirSync(__dirname),
    newArr = [];

let mockJson = {};

/**
 * 重新构造数组，去掉index
 */
fileArr.forEach((item) => {
  if (!/index/.test(item)) {
    newArr.push(item.match(/(\w+)\./)[1]);
  }
});


/**
 * 引入文件
 */
newArr.forEach((item) => {
  let file = require('./' + item);
  mockJson = Object.assign(mockJson, file);
});

/**
 * 把key接入到exports
 */
for (let key in mockJson) {
  if (mockJson.hasOwnProperty(key)) {
    let element = mockJson[key];
    exports[key] = element;
  }
}
