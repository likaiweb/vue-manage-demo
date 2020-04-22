/*
 * @Date: 2019-12-26 11:52:56
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 14:28:49
 * @Description: 开发环境参数配置
 * @FilePath: /H5MerchantCMS/src/libs/config.js
 */
const config={
    // 生产环境
    production: {
        prod: {
            baseURL: 'https://api.eqimei.cn/mradmin'
        },
        beta: {
            baseURL: 'https://api.eqimei.cn/mradmin'
        },
        dev: {
            baseURL: 'https://api.eqimei.cn/mradmin'
        }
    },
    // 开发环境
    development: {
        baseURL: 'https://api.eqimei.cn/mradmin'
    },
}
export default process.env.NODE_ENV == 'production' ? 
                config[process.env.NODE_ENV][process.env.VUE_APP_FLAG] 
                : config[process.env.NODE_ENV]