<template>
  <div class="root">
    <div>
      <input-up-info></input-up-info>
    </div>
    <v-layout>
      <v-flex>
        <v-btn @click="getUpSubmit('stow')" :disabled="!BtnState">按收藏查看</v-btn>
        <v-btn @click="getUpSubmit('click')" :disabled="!BtnState">按播放量查看</v-btn>
        <p v-if="!Loading" style="color: red">点击上方查看</p>
      </v-flex>
    </v-layout>
    <div ref="img" style="width: 100%;height:600px;">

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import * as _ from 'lodash'
import InputUpInfo from '../../components/common/inputUpInfo'
import {mapState} from 'vuex'
import {getUpTop} from '../../utiliy/handleUpInfo'

export default {
  name: 'play-count',
  components: {InputUpInfo},
  data: function () {
    return {
      img: null,
      upData: null,
      upName: '',
      chart: null
    }
  },
  mounted: function () {
    this.img = this.$refs.img
  },
  watch: {},
  computed: {
    ...mapState(['Up', 'Loading', 'UpMid', 'BtnState'])
  },
  methods: {
    async getUpSubmit (type) {
      const that = this
      this.upData = await getUpTop(this.UpMid, type)
      this.UpName = _.map(this.upData, 'author')[0]
      this.initEcharts(type === 'stow' ? 'favorites' : 'play')
      window.addEventListener('resize', () => {
        that.resizeScreen()
      })
    },
    resizeScreen () {
      this.$refs.img.style.width = window.innerWidth + 'px'
      this.chart.resize()
    },
    initEcharts: function (type) {
      this.chart = echarts.init(this.img)
      this.chart.setOption({
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        title: {
          text: this.UpName + '视频热度排行',
          subtext: '副标题'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        dataZoom: [{
          type: 'slider',
          start: 0,
          end: 5
        }],
        grid: {
          left: '0%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        xAxis: {
          type: 'category',
          data: _.map(this.upData, 'title'),
          // nameRotate: '80%'
          zlevel: 1,
          axisLabel: {
            interval: 0,
            rotate: 90,
            inside: true
          }
        },
        series: [
          {
            name: type === 'favorites' ? '收藏' : '点击',
            type: 'bar',
            data: _.map(this.upData, type)
          }
        ]
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .root
    width 100%
</style>
