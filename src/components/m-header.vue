<template>
  <v-toolbar app>
    <v-toolbar-title>BiliBili-趋势(゜-゜)つロ</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu class="hidden-sm-and-up">
      <v-btn color="primary" slot="activator">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-for="m of menu" :key="m.name">
          <v-list-tile-title @click="go(m.route)">{{ m.name }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-toolbar-items class="hidden-xs-only" v-for="m of menu" :key="m.name">
      <v-btn flat @click="go(m.route)">{{ m.name }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'm-header',
  data: () => ({
    menu: [
      {route: '/main', name: '主站相关'},
      {route: '/up', name: 'Up 相关'}
    ]
  }),
  methods: {
    go (addr) {
      this.$router.push(addr)
    }
  }
}
</script>

<style scoped>

</style>
