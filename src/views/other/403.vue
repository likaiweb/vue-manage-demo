<!--
 * @Date: 2020-04-21 11:41:05
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 15:59:26
 * @Description: 403
 * @FilePath: /H5MerchantCMS/src/views/other/403.vue
 -->
<template>
    <div class="nofind flex align justify">
        <img :src="require('@/assets/img/403.png')" alt="403">
        <div>
            <div class="title">403</div>
            <div class="con">抱歉，你无权访问该页面</div>
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
            width: 227px;
            height: 269px;
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