<template>
  <el-main>
    <div ref="img" style="width: 100%;height:400px;">

    </div>
  </el-main>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'play-count',
  props: ['Up'],
  data: function () {
    return {
      img: null,
      playCount: [],
      titles: []
    }
  },
  mounted: function () {

  },
  watch: {
    'Up': function () {
      this.img = this.$refs.img
      for (let item of this.Up.sortByPlayCount) {
        this.titles.push(item.title)
        this.playCount.push(item.play)
      }

      this.initEcharts()
    }
  },
  methods: {
    initEcharts () {
      echarts.init(this.img).setOption({
        title: {
          text: this.Up.name + '视频热度排行',
          subtext: '副标题'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '0%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: this.titles
        },
        series: [
          {
            name: this.Up.name,
            type: 'bar',
            data: this.playCount
          }
        ]

      })
    }
  }
}
</script>

<style scoped>

</style>
