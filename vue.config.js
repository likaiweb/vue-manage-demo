/*
 * @Date: 2019-12-25 16:25:46
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-28 14:30:07
 * @Description: 配置文件
 * @FilePath: /H5SalesCMS/vue.config.js
 */
const path = require('path');
const time = new Date().getTime();
module.exports = {
    outputDir: '/' + process.env.outputDir + '/',
    lintOnSave: false,  // 禁止报错
    productionSourceMap: false,  // 资源压缩
    css: {
        loaderOptions: {
            less: {
                globalVars: {
                    theme: '#409EFF',
                }
            }
        }
    },
    configureWebpack: { // webpack 配置
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].${time}.js`,
            chunkFilename: `js/[name].${time}.js`
        },
    },
}