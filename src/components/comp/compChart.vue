<!--
 * @Date: 2019-11-04 18:53:29
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-03-04 14:44:42
 * @Description: echart
 * @FilePath: /medicalBeautyCMS/src/components/common/compChart.vue
 -->
<template>
  <div class="echartsLine" :id="id" :style="style"></div>
</template>
<script>
export default {
  name:'compChart',
  props: {
    id: {
      type: String
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String
    },
    option: {
      type: Object
    }
  },
  data() {
    return {
      MyEcharts: "" //echarts实例
    };
  },
  computed: {
    style() {
      return {
        height: this.height||'100%',
        width: this.width||'100%'
      };
    }
  },
  watch: {
    //要监听的对象 option
    //由于echarts采用的数据驱动，所以需要监听数据的变化来重绘图表
    option: {
      handler(newVal, oldVal) {
        if (this.MyEcharts) {
          if (newVal) {
            let publicCharts = this.MyEchartsOption(newVal);
            this.MyEcharts.setOption(publicCharts, true);
          } else {
            let publicCharts = this.MyEchartsOption(oldVal);
            this.MyEcharts.setOption(publicCharts, true);
          }
        } else {
          this.InitCharts();
        }
      },
      deep: true //对象内部属性的监听，关键。
    }
  },
  mounted() {
    this.InitCharts();
  },
  methods: {
    InitCharts() {
      this.MyEcharts = this.$echarts.init(document.getElementById(this.id));
      let publicCharts = this.MyEchartsOption(this.option);
      this.MyEcharts.clear();
      this.MyEcharts.setOption(publicCharts, true);
      let _this = this;
      window.addEventListener("resize", function() {
        _this.MyEcharts.resize();
      });
    },
    // 可以再次初始化
    MyEchartsOption(configures) {
      return configures;
    }
  }
};
</script>
<style lang="less" scoped>
</style>