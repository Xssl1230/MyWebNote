import axios from "axios";
// import qs from "qs";
import { Message,Notification,Loading } from 'element-ui';
import router from '../src/router.js'
axios.defaults.timeout = 10000;

let loading        //定义loading变量

function startLoading() {    //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {    //使用Element loading-close 方法
    loading.close()
}

axios.defaults.baseURL = "http://ispserv.ga.hainan.gov.cn";
// axios.defaults.baseURL = "http://74.6.53.125:8080";
axios.defaults.withCredentials=true; //携带cookie信息
// process.env.NODE_ENV === "production" ? "http://mobile.jjzx.gov.cn" : "http://api.jjzx.gov.cn";
// axios.defaults.baseURL = baseUrl;

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // if (sessionStorage.token) {
    //   config.headers.TOKEN = sessionStorage.token;
    // }
		// startLoading()
    return config;
  },
  error => Promise.reject(error)
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
		// endLoading()
		if(response.data.errorCode && response.data.errorCode === "AUTH.UNAUTHORIZED"){
			Message.error('登录已失效，请重新登录！');
			router.push('/login')
		}
    return response.data;
  },
  error => {
		// endLoading()
		console.log("error",error)

    return Promise.reject(error);
  }
);

/**
 * 封装get请求
 * @param url
 * @param data
 */
async function get(url, params = {}) {
  return await axios.get(url, {
    params: params
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 */
// qs.stringify(data)
async function post(url, data = {}) {
  return await axios.post(url,data, {
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded"
      // application/x-www-form-urlencoded
      // multipart/form-data
    }
  });
}


export { get, post };
