// import axios from 'axios'
const axios = require("axios")
// import mainConfig from './serve-config/main'
const mainConfig = require('./serve-config/main')
// 使用自定义配置创建一个新的axios实例
class Fetch{
    static getData(config) {
        // axios.create([config]) 创建一个axios实例
        const instance = axios.create(config)

        // 添加响应拦截器
        instance.interceptors.request.use(...config.reqInterceptor)
        instance.interceptors.response.use(...config.repInterceptor)

        return instance.request(config)
    }
    // data data.url ----
    post(data) {
        // 服务配置
        const serverConfig = {
            url: data.url,
            method: 'post',
            headers: {
                "Authentication": 'token-----',
            },
            data: data.params
        }
        // 主配置
        return Fetch.getData(Object.assign({ }, mainConfig, serverConfig))
    }
}

const fetch = new Fetch()
