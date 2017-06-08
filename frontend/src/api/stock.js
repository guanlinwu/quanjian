/**
 *
 */
import axiosEx from '@/utils/axiosEx';
import storage from '@/utils/storage';

/**
 * 会员基本信息 列表
 *
 * @param {number} page 当前页
 * @returns Promise
 */
export const getStockList = (page) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Stock/GetStockList',
        headers: {'Authorization': 'Bearer ' + token},
        params: {
          page: page
        }
      }).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      });
    } else {
      reject({success: false, msg: 'token不存在于storage中'});
    }
  });
};

/**
 *
 * 获取单个信息
 * @param {any} id 数据库保存的用户id
 * @returns Promise
 */
export const getStockItem = (id) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Stock/GetStockItem',
        headers: {'Authorization': 'Bearer ' + token},
        params: {
          id
        }
      }).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      });
    } else {
      reject({success: false, msg: 'token不存在于storage中'});
    }
  });
};

/**
 * 搜索建议 列表
 *
 * @param {string} query 可能是名字，可能是编号，可能是手机号
 * @returns Promise
 */
export const getStockRecommend = (query) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Stock/GetStockRecommend',
        headers: {'Authorization': 'Bearer ' + token},
        params: {
          query
        }
      }).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      });
    } else {
      reject({success: false, msg: 'token不存在于storage中'});
    }
  });
};

export const modifyStock = (options) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'post',
        url: '/api/services/app/Stock/ModifyStock',
        headers: {'Authorization': 'Bearer ' + token},
        data: {
          value: options.value,
          isEntry: options.entry
        }
      }).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      });
    } else {
      reject({success: false, msg: 'token不存在于storage中'});
    }
  });
};
