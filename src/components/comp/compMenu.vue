<!--
 * @Date: 2020-04-21 11:53:01
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-28 16:09:20
 * @Description: 菜单
 * @FilePath: /H5SalesCMS/src/components/comp/compMenu.vue
 -->
<template>
    <div class="comp_menu" :style="{'width':menuShow?'250px':''}">
        <el-menu
        :default-active="onRoutes"
        background-color="#002140"
        text-color="#B1B8C1"
        active-text-color="#fff"
        unique-opened
        :collapse="!menuShow"
        router>
        <el-menu-item style="height:70px;line-height:70px;color:#fff;font-size:18px;">
            <i class="el-icon-menu" @click="setmenuShow(!menuShow)"></i>
            <span slot="title" >销售管理系统</span>
        </el-menu-item>
        <template v-for="v in menuArr">
            <el-submenu v-if="v.childMenus.length" :key="v.url" :index="v.url">
                <template slot="title">
                    <img v-if="!!v.icon&&v.icon!==''" :src="v.icon" style="margin-right:10px;width:20px;height:20px;"/>
                    <span slot="title">{{v.name}}</span>
                </template>
                <el-menu-item v-for="val in v.childMenus" :key="val.url" :index="val.url">{{val.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else :key="v.url" :index="v.url">
                <img v-if="!!v.icon&&v.icon!==''" :src="v.icon" style="margin-right:10px;width:20px;height:20px;"/>
                <span slot="title">{{v.name}}</span>
            </el-menu-item>
        </template>
        </el-menu>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
    export default {
        data() {
            return {
                menuArr:this.$utils.getSSItem("sliderMenuData")||[],  // menu数组
            }
        },
        computed: {
            ...mapState({
                menuShow:state=>state.menu.menuShow
            }),
            onRoutes() {
                return this.$route.path.replace("/", "");
            },
        },
        created() {
            
        },
        methods: {
            ...mapMutations(['setmenuShow']),
        },
    }
</script>

<style lang="less" scoped>
    .comp_menu{
        position: relative;
        height: 100%;
        width: 64px;
        flex-shrink: 0;
        transition: all .3s;
        overflow-y: auto;
        background: #002140;
        &::-webkit-scrollbar{
            width: 0;
        }
        .el-menu{
            border: 0;
            .el-menu-item{
                text-align: left;
                padding-left: 60px;
            }
        }
    }
</style>
<style lang="less">
    .el-submenu__title{
        text-align: left;
        padding-left: 60px;
    }
</style>