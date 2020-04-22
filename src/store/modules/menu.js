/*
 * @Date: 2019-12-26 11:35:43
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-21 14:06:25
 * @Description: 菜单
 * @FilePath: /H5MerchantCMS/src/store/modules/menu.js
 */
export default {
    state:{
        menuShow:false,
    },
    mutations:{
        setmenuShow(state, val) {
            state.menuShow = val;
        }
    }
}