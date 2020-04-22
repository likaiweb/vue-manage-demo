/*
 * @Date: 2019-12-26 11:19:04
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 16:46:20
 * @Description: 状态管理
 * @FilePath: /H5MerchantCMS/src/store/index.js
 */
import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);
let storeModules = {}
const files = require.context('./modules/', false, /\.js$/);
files.keys().forEach(v => {
    if (v == './index.js') return;
    const reg=/\.\/(.*)\.js/ig;
    storeModules[v.replace(reg, '$1')] = files(v).default
})
const store = new vuex.Store({
    state:{
        blurShow:false
    },
    mutations:{
        setBlur(state,val){
            state.blurShow=val;
        }
    },
    modules:storeModules
})
export default store;