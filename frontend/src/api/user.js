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
export const getUsersList = (page) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/User/GetUsersList',
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
export const getUsersItem = (id) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/User/GetUsersItem',
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
 * 会员搜索建议 列表
 *
 * @param {string} query 可能是名字，可能是编号，可能是手机号
 * @returns Promise
 */
export const getUsersRecommend = (query) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/User/GetUsersRecommend',
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
 * 新建新会员
 *
 * @param {Object} {
 *   name,
 *   number,
 *   joinMoney,
 *   userType,
 *   phone,
 *   accumulateLevel
 * }
 * @returns
 */
export const createUser = ({
  name,
  number,
  joinMoney,
  userType,
  phone,
  accumulateLevel
}) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'post',
        url: '/api/services/app/User/CreateUser',
        headers: {'Authorization': 'Bearer ' + token},
        data: {
          name,
          number,
          joinMoney,
          userType,
          phone,
          accumulateLevel
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
 * 修改单个会员数据
 *
 * @param {Object} {
 *   name,
 *   number,
 *   joinMoney,
 *   userType,
 *   phone,
 *   accumulateLevel
 * }
 * @returns
 */
export const modifyUser = ({
  name,
  number,
  joinMoney,
  userType,
  phone,
  accumulateLevel
}) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'post',
        url: '/api/services/app/User/ModifyUser',
        headers: {'Authorization': 'Bearer ' + token},
        data: {
          name,
          number,
          joinMoney,
          userType,
          phone,
          accumulateLevel
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


export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'post',
        url: '/api/services/app/User/DeleteUser',
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
