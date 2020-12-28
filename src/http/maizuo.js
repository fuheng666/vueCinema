import axios from 'axios'
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
const instance = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1607068294914046350000129","bc":"370200"}'
  }
})
instance.interceptors.request.use(
  config => {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      overlay: true,
      loadingType: "spinner",
      duration: 0
    });

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    Toast.clear();

    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance