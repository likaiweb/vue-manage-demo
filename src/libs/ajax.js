/*
 * @Date: 2019-12-26 11:15:04
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-28 15:53:42
 * @Description: ajax封装
 * @FilePath: /H5SalesCMS/src/libs/ajax.js
 */
import axios from 'axios'
import envConfig from './config';
import {
    Message,
    Loading
}
from "element-ui";
let loading;  // 全局loading
let needLoadingRequestCount = 0;  // 请求数
// 显示loading
function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        loading = Loading.service({
            lock: true,
            text: "Loading",
            target: document.querySelector(".content-box")
        });
    }
    needLoadingRequestCount++;
}
// 关闭loading
function tryHideFullScreenLoading() {
    needLoadingRequestCount--;
    if (needLoadingRequestCount <= 0) {
        needLoadingRequestCount=0;
        loading.close();
    }
}
const CancelToken = axios.CancelToken;
const Axios=new axios.create({
    timeout: 60000,
    responseType: "json",
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    }
})
// 添加请求拦截器
Axios.interceptors.request.use(config=>{
    // 在发送请求之前做些什么
    let requestName = config.url
    // 取消重复请求
    if (requestName) {
        if (axios[requestName] && axios[requestName].cancel) {
            axios[requestName].cancel("取消重复请求=>" + requestName)
        }
        config.cancelToken = new CancelToken(c => {
            axios[requestName] = {}
            axios[requestName].cancel = c
        })
    }
    // 除图片外添加token，等头文件
    if (
        requestName.indexOf("/api/pub/upImgsBase64") == -1&&
        requestName.indexOf("login") == -1
        ) {
        if (sessionStorage['mr-token']) {
            config.headers["mr-token"] = sessionStorage['mr-token'];
        }
    }
    return config;
}, error=>{
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(response=> {
    // 对响应数据做点什么
    tryHideFullScreenLoading();
    return response;
}, error => {
    tryHideFullScreenLoading();
    if (!window.sessionStorage.getItem("mr-token")) {
        // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
        router.push({
            path: "/login"
        });
    }
    // 对响应错误做点什么
    if(error.response){
        // 未登录
        if (error.response.status === 401) {
            Message({
                message: "登录失效，请重新登录！",
                type: "error",
                duration: 5 * 1000
            });
            return router.replace({
                path: "/login"
            });
        }
        // 未找到
        if (error.response.status === 404) {
            Message({
                message: "未找到相关数据",
                type: "error",
                duration: 5 * 1000
            });
        }
        // 错误
        if (!!error.response.data) {
            Message({
                message: error.response.data.msg,
                type: "error",
                duration: 5 * 1000
            });
        } else if (
            !error.response.data &&
            error.response.status !== 401 &&
            error.response.status !== 404
        ) {
            Message({
                message: "网络繁忙，请稍后重试！",
                type: "error",
                duration: 5 * 1000
            });
        }
    }
    return Promise.reject(error);
});
/**
 * @description: get请求
 * @param {string} url - 请求地址 
 * @param {object} params - 请求参数 
 * @return: promise
 */
const $get=(url,params={})=>{
    return new Promise((resolve,reject)=>{
        if (typeof params.showLoading === 'undefined' || params.showLoading) {
            // 展示loading
            showFullScreenLoading();
        }
        Axios.get(envConfig.baseURL+ url, {
            params:params.params
        }).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err)
        })
    })
}
/**
 * @description: post请求
 * @param {string} url - 请求地址 
 * @param {object} params - 请求参数 
 * @return: promise
 */
const $post = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        if (typeof params.showLoading === 'undefined' || params.showLoading) {
            // 展示loading
            showFullScreenLoading();
        }
        Axios.post(envConfig.baseURL + url, params.params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}
export {
    $get,
    $post
}