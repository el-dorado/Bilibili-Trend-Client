<template>
  <div class="root">
    <div>
      <input-up-info></input-up-info>
    </div>
    <v-layout>
      <v-flex sm="5">
        <v-text-field type="number" v-model="num"
                      :disabled="Loading" placeholder="要查看的数量">
        </v-text-field>
      </v-flex>
      <v-flex>
        <v-btn @click="asc().byFavorite()" :disabled="Loading">按收藏查看</v-btn>
        <v-btn @click="asc().byPlayCount()" :disabled="Loading">按播放量查看</v-btn>
      </v-flex>
    </v-layout>
    <div ref="img" style="width: 100%;height:600px;">

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import InputUpInfo from '../../components/common/inputUpInfo'
import {mapState} from 'vuex'

export default {
  name: 'play-count',
  components: {InputUpInfo},
  data: function () {
    return {
      img: null,
      titles: [],
      seriesData: [],
      num: 10
    }
  },
  mounted: function () {
    this.img = this.$refs.img
  },
  watch: {},
  computed: {
    ...mapState(['Up', 'Loading'])
  },
  methods: {
    asc () {
      this.titles = []
      this.seriesData = []
      const that = this
      return {
        byPlayCount () {
          for (let item of that.Up.asc().byPlayCount().slice(0, that.num)) {
            that.titles.push(item.title)
            that.seriesData.push(item.play)
          }
          that.initEcharts()
        },
        byFavorite () {
          for (let item of that.Up.asc().byFavorite().slice(0, that.num)) {
            that.titles.push(item.title)
            that.seriesData.push(item.favorites)
          }
          that.initEcharts()
        }
      }
    },
    initEcharts () {
      echarts.init(this.img).setOption({
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
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
          data: this.titles,
          nameRotate: '80%'
        },
        series: [
          {
            name: this.Up.name,
            type: 'bar',
            data: this.seriesData
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
