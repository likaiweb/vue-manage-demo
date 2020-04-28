<!--
 * @Date: 2020-04-22 14:00:07
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-28 16:09:28
 * @Description: 头部
 * @FilePath: /H5SalesCMS/src/components/comp/compHeader.vue
 -->
<template>
    <div class="compHeader flex align">
        <div class="title">{{title}}</div>
        <span>{{userInfo.name}}</span>
        <span class="role">{{userInfo.roleName}}</span>
        <i class="iconfont iconguanji" @click="exitCMS"></i>
    </div>
</template>

<script>
import {$logoutMSM} from '@/api/login'
    export default {
        name:'compHeader',
        data() {
            return {
                title:this.$route.meta.title,  // 显示标题,
                dialogVisible:false,  // 是否退出
                userInfo:this.$utils.getSSItem("userInfo")||{}, // 用户信息
            }
        },
        created() {
            
        },
        watch: {
            '$route'(to){
                if(to.meta.title!=='404'&&to.meta.title!=='500'&&to.meta.title!=='403'){
                    this.title=to.meta.title
                }
            },
            dialogVisible(v){
                
            }
        },
        methods: {
            exitCMS(){
                this.$confirm("确认退出该账号?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    $logoutMSM().then(res => {
                        sessionStorage.removeItem("mr-token");
                        sessionStorage.removeItem("sliderMenuData");
                        sessionStorage.removeItem("userInfo");
                        this.go("login");
                        this.$message({
                            type: "success",
                            message: "操作成功!"
                        });
                    });
                }).catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消操作"
                    });
                });
            }
        },
    }
</script>

<style lang="less" scoped>
    .compHeader{
        width: 100%;
        height: 90px;
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
            border:1px solid @theme;
            color: @theme;
            border-radius: 2px;
            padding: 0 4px;
        }
    }
</style>