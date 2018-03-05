<template>
  <div ref="container" style="width: 100%;height: 600px;padding: 20px 0 0 0">

  </div>
</template>

<script>
import {mapState} from 'vuex'
import * as echarts from 'echarts'
import * as _ from 'lodash'

export default {
  name: 'rankList',
  data: function () {
    return {
      chart: null
    }
  },
  beforeCreate: function () {
  },
  mounted: function () {
    const that = this
    this.$nextTick(function () {
      window.addEventListener('resize', () => {
        that.resizeScreen()
      })
    })
  },
  computed: {
    ...mapState(['RankList'])
  },
  methods: {
    resizeScreen () {
      this.$refs.container.style.width = window.innerWidth + 'px'
      this.chart.resize()
    }
  },
  watch: {
    RankList: function () {
      this.chart = echarts.init(this.$refs.container)
      this.chart.setOption({
        title: {
          text: '图表如下'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['播放', '收藏', '硬币', '评论']
        },
        dataZoom: [{
          type: 'slider',
          start: 0,
          end: 8
        }],
        xAxis: [
          // {
          //   type: 'value',
          //   data: _.map(this.RankList, 'title'),
          // },
          {
            type: 'category',
            data: _.map(this.RankList, 'title'),
            zlevel: 1,
            axisLabel: {
              interval: 0,
              rotate: 90,
              inside: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '播放',
            type: 'bar',
            label: '搜索引擎',
            data: _.map(this.RankList, 'play')
          },
          {
            name: '硬币',
            type: 'bar',
            label: '搜索引擎',
            data: _.map(this.RankList, 'coins')
          },
          {
            name: '评论',
            type: 'bar',
            label: '搜索引擎',
            data: _.map(this.RankList, 'video_review')
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
