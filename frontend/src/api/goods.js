/**
 *
 */
import axiosEx from '@/utils/axiosEx';
import storage from '@/utils/storage';

/**
 * 基本信息 列表
 *
 * @param {number} page 当前页
 * @returns Promise
 */
export const getGoodsList = (page) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Goods/GetGoodsList',
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
 * 获取单个用户信息
 * @param {any} id 数据库保存的用户id
 * @returns Promise
 */
export const getGoodsItem = (id) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Goods/GetGoodsItem',
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
export const getGoodsRecommend = (query) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Goods/GetGoodsRecommend',
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
 * 新建
 *
 * @param {Object} {
 *   name,
 *   number,
 *   joinMoney,
 *   GoodsType,
 *   phone,
 *   accumulateLevel
 * }
 * @returns
 */
export const createGoods = ({
  number,
  name,
  standard,
  price,
  converRate,
  credit,
  isSpecial,
  goodsType
}) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'post',
        url: '/api/services/app/Goods/CreateGoods',
        headers: {'Authorization': 'Bearer ' + token},
        data: {
          number,
          name,
          standard,
          price,
          converRate,
          credit,
          isSpecial,
          goodsType
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
}

/**
 * 修改单个产品数据
 *
 * @param {Object} {
 *   name,
 *   number,
 *   joinMoney,
 *   GoodsType,
 *   phone,
 *   accumulateLevel
 * }
 * @returns
 */
export const modifyGoods = ({
  number,
  name,
  standard,
  price,
  converRate,
  credit,
  isSpecial,
  goodsType
}) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'post',
        url: '/api/services/app/Goods/ModifyGoods',
        headers: {'Authorization': 'Bearer ' + token},
        data: {
          number,
          name,
          standard,
          price,
          converRate,
          credit,
          isSpecial,
          goodsType
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
}

/**
 *
 * @param {string} id
 */
export const deleteGoods = (id) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'post',
        url: '/api/services/app/Goods/DeleteGoods',
        headers: {'Authorization': 'Bearer ' + token},
        data: {
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
}
