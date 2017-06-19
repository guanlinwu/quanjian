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
export const getCreditList = (page) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Credit/GetCreditList',
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
export const getCreditItem = (id) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Credit/GetCreditItem',
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
export const getCreditRecommend = (query) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Credit/GetCreditRecommend',
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

/**
 *
 * @param {object} options
 */
export const modifyCredit = (options) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'post',
        url: '/api/services/app/Credit/ModifyCredit',
        headers: {'Authorization': 'Bearer ' + token},
        data: {
          value: options.value,
          isReduce: options.reduce
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
