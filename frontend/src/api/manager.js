/**
 *
 */
import axiosEx from '@/utils/axiosEx';
import storage from '@/utils/storage';
/**
 * 获取授权token
 * @param {Object} options 包含账号和密码
 * @return
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
 * 获取用户信息 需要token
 * @return
 */
export const getUsers = () => {
  return new Promise((resolve, reject) => {
    let token = storage.get('token');
    if (token) {
      axiosEx({
        method: 'get',
        url: '/api/services/app/User/GetUsers',
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
