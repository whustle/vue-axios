import Vue from 'vue'
import axios from 'axios'
import { VueAxios } from './axios'

//const httpAdapter = require("axios/lib/adapters/http")
 
// 创建 axios 实例
const service = axios.create({
  baseURL: 'https://192.168.1.110:2020/v1', // api base_url

  timeout: 6000 // 请求超时时间
})
const err = (error) => {
  if (error.response) {
    const data = error.response.data
    const token = ""
    if (error.response.status === 403) {
      
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
    
    }
  }
  return Promise.reject(error)
}



const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
