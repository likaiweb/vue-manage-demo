/*
 * @Date: 2019-12-26 11:14:47
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 15:29:10
 * @Description: 工具
 * @FilePath: /H5MerchantCMS/src/libs/utils.js
 */
// sessionStorage相关
const utils = {
    getSSItem : key => {
        try {
            return JSON.parse(window.sessionStorage.getItem(key))
        } catch (error) {
            return null;
        }
    },
    setSSItem : (key, val) => {
        window.sessionStorage.setItem(key, typeof val === 'object' ? JSON.stringify(val) : val);
    },
    clearSS : () => {
        window.sessionStorage.clear();
    },
    hasSSKey : key => {
        return !!window.sessionStorage.key(key);
    },
    removeSSItem : key => {
        window.sessionStorage.removeItem(key);
    }
}
export default utils