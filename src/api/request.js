// 对于axios进行二次封装
import axios from "axios";
// 引入进度条nprogess
import nprogess from "nprogress";
// 引入进度条的样式
import "nprogress/nprogress.css";
// start:进度条开始 done:进度条结束

//利用axios对象的create方法,去创建一个axios实例
const requests = axios.create({
  // 基础路径
  baseURL: "/api",
  // 请求超时时间
  timeout: 5000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
  // config:配置对象,其中有一个属性很重要,headers请求头
  if (localStorage.getItem("UUIDTOKEN")) {
    config.headers.userTempId = localStorage.getItem("UUIDTOKEN");
  }
  //即将发送请求,进度条开始动
  nprogess.start();
  return config;
});

// 响应拦截器
requests.interceptors.response.use(
  // 响应成功的回调,可以对数据进行一些操作
  (res) => {
    //即将收到数据,进度条结束
    nprogess.done();
    return res.data;
  },
  //响应失败的回调
  (error) => {
    return Promise.reject(new Error("failed"));
  }
);
// 对外暴露
export default requests;
