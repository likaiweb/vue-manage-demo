/*
 * @Date: 2020-04-28 15:19:38
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-28 15:58:23
 * @Description: 
 * @FilePath: /H5SalesCMS/src/api/login.js
 */
 import {
    $get,
    $post
 } from '@/libs/ajax'
//  获取验证码
const $getImgVerifyCode = params => {
    return $get("/captcha", params)
}
// 登录
const $loginMSM = params => {
    return $post("/login", params)
}
// 获取菜单
const $getSliderMenus = params => {
    return $get("/index", params);
};
// 登出
const $logoutMSM = params => {
    return $get("/logout", params);
};
export {
    $getImgVerifyCode,
    $loginMSM,
    $getSliderMenus,
    $logoutMSM,
}