<!--
 * @Date: 2019-12-25 16:06:20
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 16:50:37
 * @Description: 首页
 * @FilePath: /H5MerchantCMS/src/App.vue
 -->
<template>
  <div id="app" :class="blurShow?'blur':''">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      blurShow:state=>state.blurShow
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #F7F7F7;
}
.blur{
  filter: blur(4px);
}
</style>
