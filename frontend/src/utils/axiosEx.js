/**
 * 配置axios
 */
import {polyfill} from 'es6-promise';
polyfill();
import axios from 'axios';

// axios 配置
// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:5000';

export default axios;
