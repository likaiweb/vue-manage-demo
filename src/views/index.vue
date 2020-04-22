<!--
 * @Date: 2019-12-25 16:33:50
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 15:36:02
 * @Description: 主页
 * @FilePath: /H5MerchantCMS/src/views/index.vue
 -->
<template>
    <div class="home flex">
        <comp-menu></comp-menu>
        <section class="page-content-box">
            <comp-header></comp-header>
            <div class="page-content">
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                </transition>
                <transition name="move" mode="out-in">
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                </transition>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        created() {
            
        },
    }
</script>

<style lang="less" scoped>
    .home{
        width: 100%;
        height: 100%;
        .page-content-box{
            height: 100%;
            width: 100%;
            transition: all .3s;
            .page-content{
                height: calc(100% - 90px);
                overflow: auto;
                &::-webkit-scrollbar{
                    width: 0;
                }
            }
        }
    }
</style>