/**
 * @author wxj
 * @date 2019/4/11 15:19
 * @Last Modified by wxj
 * @Last Modified time 2019/4/11 15:19
 */
import Fly from 'flyio/dist/npm/wx'
var fly = new Fly()

var host = 'http://192.168.1.249:12460'
// 添加请求拦截器
fly.interceptors.request.use((config, promise) => {
  // 给所有请求添加自定义header
  config.headers = {
    'config': 'flyio',
    'content-type': 'application/json;charset=UTF-8;'
  }
  config.baseURL = host
  config.timeout = 10000
  // 可以通过promise.reject／resolve直接中止请求
  // promise.resolve("fake data")
  return config
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response) => {
  return response.data
}, (err) => {
  return err
})

const requests = {
  getlist () {
    return fly.get('https://www.easy-mock.com/mock/5b70ec93ad23a1570071a34e/Interview/ces')
  },
  postlist (data) {
    return fly.post('https://192.168.1.249:8443/', data)
  }
}

export default requests
