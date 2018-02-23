<template>
  <el-container class="main">
    <el-header class="header">
      <h1>BiliBili 趋势</h1>
    </el-header>

    <el-container>
      <el-aside class="side">
        <el-row>
          <el-col>
            <el-button @click="go('/')">查询总站播放趋势</el-button>
          </el-col>
          <el-col>
            <el-button @click="go('/up/playcount/')">查询 Up 播放趋势</el-button>
          </el-col>
          <el-col>
            <el-button @click="go('/')">敬请期待</el-button>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="content">

        <router-view></router-view>
      </el-main>
    </el-container>

    <el-footer class="footer">
      <el-button>源码在此</el-button>
    </el-footer>
  </el-container>
</template>

<script>

export default {
  components: {},
  name: 'App',
  data: function () {
    return {

    }
  },
  methods: {
    go (addr) {
      this.$router.push(addr)
    }
  }
}
</script>

<style lang="stylus">
html,body,.main{
  height 100%
  width 100%
}
  .side
    height 100%
</style>
