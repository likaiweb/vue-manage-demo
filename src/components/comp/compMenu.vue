<!--
 * @Date: 2020-04-21 11:53:01
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 15:29:39
 * @Description: 菜单
 * @FilePath: /H5MerchantCMS/src/components/comp/compMenu.vue
 -->
<template>
    <div class="comp_menu" :style="{'width':menuShow?'278px':''}">
        <section class="left flex column align"> 
            <img :src="require('@/assets/img/logo.png')" alt="logo" class="logo">
            <div class="menu_f_list">
                <div class="menu_f_item flex column align justify" 
                    v-for="(v,i) in menuArr" 
                    :key="v.url"
                     @click="menuClick(v,i)"
                    :class="menuIndex==i?'menu_f_item_selected':''">
                    <img :src="menuIndex==i?require('@/assets/img/menu_selected.png'):require('@/assets/img/menu.png')" alt="">
                    <span>{{v.name}}</span>
                </div>
            </div>
        </section>
        <section class="right" :class="menuShow?'right_show':''">
            <div class="menu_title flex column justify">
                <span>易起美后台管理系统</span>
                <b>{{menuTitle}}</b>
            </div>
            <div class="menu_box">
                <el-menu
                :default-active="onRoutes"
                background-color="#fff"
                text-color="#565682"
                active-text-color="#815DBC"
                unique-opened
                router>
                <template v-for="v in menuArr[this.menuIndex].childMenus">
                    <el-submenu v-if="v.childMenus.length" :key="v.url" :index="v.url">
                        <template slot="title">
                            <i class="iconfont iconyuan"></i>
                            <span>{{v.name}}</span>
                        </template>
                        <el-menu-item v-for="val in v.childMenus" :key="val.url" :index="val.url">{{val.name}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :key="v.url" :index="v.url">
                        <i class="iconfont iconyuan"></i>
                        <span slot="title">{{v.name}}</span>
                    </el-menu-item>
                </template>
                </el-menu>
            </div>
            <div class="hide flex">
                <i @click="setmenuShow(false)" class="iconfont iconyincang"></i>
            </div>
        </section>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import obj from '../menu.json'
    export default {
        data() {
            return {
                menuArr:[],  // menu数组
                menuIndex:this.$utils.getSSItem('menuIndex')||0,  // 一级menu下下标
                menuTitle:'',  // 一级菜单标题
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
            this.menuArr=obj;
            this.initMenu()
        },
        methods: {
            ...mapMutations(['setmenuShow']),
            /**
             * 初始化菜单
             */
            initMenu(){
                this.menuTitle=this.menuArr[this.menuIndex].name;
            },
            /**
             * 一级菜单点击
             */
            menuClick(v,i){
                this.$utils.setSSItem('menuIndex',i)
                this.menuIndex=i;
                this.setmenuShow(true);
                this.menuTitle=v.name;
            },
        },
    }
</script>

<style lang="less" scoped>
    .comp_menu{
        position: relative;
        height: 100%;
        width: 110px;
        flex-shrink: 0;
        .left{
            width: 110px;
            height: 100%;
            background: #fff;
            box-shadow:5px 0px 20px 0px rgba(0,0,0,0.05);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 200;
            .logo{
                width: 40px;
                height: 40px;
                margin: 27px 0;
            }
            .menu_f_list{
                height: calc(100% - 94px);
                width: 100%;
                overflow: auto;
                &::-webkit-scrollbar{
                    width: 0;
                }
                .menu_f_item{
                    width: 100%;
                    height: 70px;
                    margin-bottom: 26px;
                    color: @fontTheme;
                    transition: all .3s;
                    cursor: pointer;
                    &:first{
                        margin-top: 12px;
                    }
                    img{
                        width: 20px;
                        height: 20px;
                    }
                    span{
                        margin-top: 2px;
                    }
                }
                .menu_f_item_selected{
                    color: @theme;
                    background: #EEE3FF;
                }
            }
        }
        .right{
            width: 168px;
            height: 100%;
            background: #fff;
            position: absolute;
            box-shadow:5px 0px 20px 0px rgba(0,0,0,0.05);
            left: -58px;
            top: 0;
            z-index: 100;
            transition: all .3s;
            .menu_title{
                width: 100%;
                height: 107px;
                box-sizing: border-box;
                padding: 26px;
                font-size: 12px;
                color: @fontTheme;
                align-items: flex-start;
                b{ 
                    font-size: 18px;
                    margin-top: 10px;
                }
            }
            .menu_box{
                width: 100%;
                height: calc(100% - 177px);
                overflow: auto;
                font-size: 14px;
                &::-webkit-scrollbar{
                    width: 0;
                }
                .el-menu{
                    border: 0;
                    background: transparent !important;
                }
                .el-submenu .el-menu-item{
                    min-width: 168px;
                    background: transparent !important;
                }
                .el-menu-item{
                    border-radius: 0 16px 16px 0;
                }
                .el-menu-item:hover, .el-menu-item.is-active{
                    background: #EEE3FF !important;
                }
                .iconyuan{
                    font-size: 12px;
                    margin-right: 10px;
                }
            }
            .hide{
                width: 100%;
                height: 60px;
                margin-top: 10px;
                justify-content: flex-end;
                i{
                    cursor: pointer;
                    padding: 10px 26px;
                }
            }
        }
        .right_show{
            left:110px;
        }
    }
</style>
<style lang="less">
    .el-submenu__title, .el-menu{
        background: transparent !important;
    }
    .el-submenu.is-opened{
        border-radius: 0 16px 16px 0;
        background: rgba(238,227,255,.24);
    }
</style>