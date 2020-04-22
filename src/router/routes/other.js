/*
 * @Date: 2019-12-25 16:19:54
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 16:00:56
 * @Description: 其他路由
 * @FilePath: /H5MerchantCMS/src/router/routes/other.js
 */
export default [{
    name: '404',
    path: "/404",
    component: () => import( /* webpackChunkName: "other" */ '@/views/other/404.vue'),
    meta: {
        title: "404",
    }
}, {
    name: '403',
    path: "/403",
    component: () => import( /* webpackChunkName: "other" */ '@/views/other/403.vue'),
    meta: {
        title: "403",
    }
}, {
    name: '500',
    path: "/500",
    component: () => import( /* webpackChunkName: "other" */ '@/views/other/500.vue'),
    meta: {
        title: "500",
    }
}, {
    name: 'demo',
    path: "/demo",
    component: () => import( /* webpackChunkName: "other" */ '@/views/other/demo.vue'),
    meta: {
        title: "demo",
    }
}]