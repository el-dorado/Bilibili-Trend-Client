<template>
  <div>
    <v-layout>
      <v-flex v-for="r of routerInfo" :key="r.router">
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
        {name: '查看历史最高', router: '/up/playcount/'}
      ]
    }
  },
  methods: {
    go (addr) {
      this.$router.push(addr)
    }
  }
}
</script>

<style scoped>

</style>
