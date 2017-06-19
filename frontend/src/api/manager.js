/**
 *
 */
import axiosEx from '@/utils/axiosEx';
import storage from '@/utils/storage';
/**
 * 获取授权token
 * @param {Object} options 包含账号和密码
 * @returns
 */
export const authenticate = (options) => {
  return new Promise((resolve, reject) => {
    axiosEx({
      method: 'post',
      url: '/api/TokenAuth/Authenticate',
      data: {
        userNameOrEmailAddress: options.userNameOrEmailAddress,
        password: options.password,
        rememberClient: true
      }
    }).then((res) => {
      //存储token
      storage.set('token', res.data.accessToken);
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
};

/**
 * 获取管理员信息 需要token
 * @returns
 */
export const getManager = () => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Manager/GetManager',
        headers: {'Authorization': 'Bearer ' + token}
      }).then((res) => {
        //存储token
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
 * 获取管理员信息列表 需要token
 * @returns
 */
export const getManagersList = () => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Manager/GetManagersList',
        headers: {'Authorization': 'Bearer ' + token}
      }).then((res) => {
        //存储token
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
export const getManagersRecommend = (query) => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/Manager/GetManagersRecommend',
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
