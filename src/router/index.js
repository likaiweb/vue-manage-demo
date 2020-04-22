/*
 * @Date: 2019-12-25 16:11:49
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 15:35:34
 * @Description: 
 * @FilePath: /H5MerchantCMS/src/router/index.js
 */
import vue from 'vue'
import Router from 'vue-router'
vue.use(Router);


let routerArr=[]
const files=require.context('./routes',false,/\.js$/);
files.keys().forEach(v=>{
    if(v=='./index.js') return;
    routerArr.push(...files(v).default)
})
const router = new Router({
    // mode:'history',
    routes: [{
        name: "home",
        path: '/',
        meta: {
            title: '主页'
        },
        component: () => import('@/views/index.vue'),
        children: routerArr
    }, {
        name: "login",
        path: '/login',
        meta: {
            title: '登录'
        },
        component: () => import('@/views/login/index.vue')
    }, {
        path: "*",
        redirect: "/404"
    }]
})
// 前置钩子
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    window.scrollTo(0, 0);
    // const role = sessionStorage.getItem("token");
    // if (!role && to.path !== "/login") {
    //     next("/login");
    // }else {
    //     next();
    // }
    next()
})
// 后置钩子
router.afterEach((to, from) => {
    // to and from are both route objects.
})


export default router