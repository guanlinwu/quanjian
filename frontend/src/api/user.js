/**
 *
 */
import axiosEx from '@/utils/axiosEx';
import storage from '@/utils/storage';

/**
 * 会员基本信息 列表
 *
 * @param {number} page 当前页
 * @returns
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
