<!--
 * @Date: 2020-04-21 11:41:05
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 15:59:54
 * @Description: 500
 * @FilePath: /H5MerchantCMS/src/views/other/500.vue
 -->
<template>
    <div class="nofind flex align justify">
        <img :src="require('@/assets/img/500.png')" alt="500">
        <div>
            <div class="title">500</div>
            <div class="con">抱歉，服务器出错了</div>
            <el-button class="long_btn" type="primary" @click="$router.back()">刷新页面</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'no'
    }
</script>

<style lang="less" scoped>
    .nofind{
        width: 100%;
        height: 100%;
        img{
            width: 422px;
            height: 203px;
            object-fit: contain;
            margin-right: 10%;
        }
        .title{
            font-size: 80px;
            font-weight: 700;
            color:#434E59;
        }
        .con{
            color:rgba(0,0,0,0.45);
            font-size: 20px;
            margin: 24px 0;
        }
    }
</style>