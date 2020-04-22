<!--
 * @Date: 2020-04-22 14:00:07
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 16:04:28
 * @Description: 头部
 * @FilePath: /H5MerchantCMS/src/components/comp/compHeader.vue
 -->
<template>
    <div class="compHeader flex align">
        <div class="title">{{title}}</div>
        <span>印花</span>
        <span class="role">店长</span>
        <i class="iconfont iconkejian"></i>
        <i class="iconfont iconguanji"></i>
    </div>
</template>

<script>
    export default {
        name:'compHeader',
        data() {
            return {
                title:this.$route.meta.title
            }
        },
        created() {
            
        },
        watch: {
            '$route'(to){
                console.log(to.meta)
                if(to.meta.title!=='404'&&to.meta.title!=='500'&&to.meta.title!=='403'){
                    this.title=to.meta.title
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .compHeader{
        width: 100%;
        height: 90px;
        color: #3A2145;
        box-sizing: border-box;
        padding-right: 0 40px;
        .title{
            font-size: 20px;
            font-weight: 700;
            margin: 0 auto 0 57px;
        }
        i{
            margin-right: 36px;
            cursor: pointer;
        }
        span{
            margin-right: 10px;
        }
        .role{
            margin-right: 28px;
            border:1px solid rgba(129,93,188,.5);
            color: #815DBC;
            border-radius: 2px;
            padding: 0 4px;
        }
    }
</style>