<template>
  <v-app>
    <m-header></m-header>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <v-layout class="text-sm-center">
        仅供个人学习使用 <a target="_blank" href="https://github.com/muxi2015/Bilibili-Trend-Client">源代码</a>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

import MHeader from './components/m-header'

export default {
  components: {MHeader},
  name: 'App',
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus">
  html, body, .main {
    height 100%
    width 100%
  }

</style>
