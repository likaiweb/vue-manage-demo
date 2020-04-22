/*
 * @Date: 2019-12-25 16:06:20
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 15:22:38
 * @Description: 入口文件
 * @FilePath: /H5MerchantCMS/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index";
import store from "@/store/index";
import utils from "@/libs/utils";
import "@/components/index";
import ElementUI from "element-ui";
import VueClipboard from "vue-clipboard2"; // 复制剪切板
import '@/libs/mixin'  // 混入
import '@/libs/prototype' // 原型方法
// 样式
import "@/assets/css/public.css"; // 初始化
import "@/assets/element-theme/index.css"; // 默认主题
import "@/assets/css/iconfont.css"; // 图标
import "@/assets/css/common.less"; // 公共样式
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: "small"
});
Vue.use(VueClipboard);
Vue.prototype.$utils = utils;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
