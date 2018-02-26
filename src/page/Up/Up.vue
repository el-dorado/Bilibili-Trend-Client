<template>
  <div>
    <v-layout>
      <v-flex v-for="r of routerInfo" :key="r.router" xs3 sm2 md2 lg2>
        <v-btn color="primary" @click="go(r.router)">{{r.name}}</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <router-view>
      </router-view>
    </v-layout>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'up',
  data: function () {
    return {
      routerInfo: [
        {name: '查看历史最高', router: '/up/top/'},
        {name: '对比 UP 信息', router: '/up/difference/'}
      ]
    }
  },
  methods: {
    go (addr) {
      this.$router.push(addr)
    }
  },
  beforeCreate: function () {
    this.$store.dispatch('getMainSiteRankAction')
  }
}
</script>

<style scoped>

</style>
