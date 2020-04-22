<!--
 * @Date: 2020-04-22 15:53:04
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-04-22 16:50:18
 * @Description: demo
 * @FilePath: /H5MerchantCMS/src/views/other/demo.vue
 -->
<template>
    <div class="demo">
        <el-button @click="btnClick">点击</el-button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        name:'demo',
        data() {
            return {
                
            }
        },
        methods: {
            ...mapMutations(['setBlur']),
            btnClick(){
                this.setBlur(true)
                var that=this;
                this.$alert('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    callback: action => {
                        that.setBlur(false)
                    }
                });
            }
        },
    }
</script>

<style lang="less" scoped>

</style>