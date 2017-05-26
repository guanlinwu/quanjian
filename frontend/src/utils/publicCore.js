/**
 * 公共方法函数
 */
import storage from '@/utils/storage';

class PublicCore {
  constructor (Vue) {
    this.Vue = Vue;
  }

  /**
   * 获取token
   * @returns
   * @memberof PublicCore
   */
  getToken () {
    return storage.get('token');
  }
  /**
   * 设置token
   * @returns
   * @memberof PublicCore
   */
  setToken (token) {
    return storage.set('token', token);
  }
  /**
   * 清楚token
   * @returns
   * @memberof PublicCore
   */
  removeToken () {
    storage.remove('token');
  }

  /**
   * 判断是否登录
   * @returns
   * @memberof PublicCore
   */
  isLogin () {
    let token = this.getToken();
    return !!token;
  }
  /**
   * 弹出登录弹窗
   * @memberof PublicCore
   */
  showLogin () {
    this.Vue.prototype.$bus.emit('showLoginForm');
  }
};

export default PublicCore;
