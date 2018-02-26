<template>
<div>
  <v-layout>
    <rank-menu v-on:onchangemenu="changeMenu">
    </rank-menu>

  </v-layout>
  <v-layout>
    <v-flex>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import RankMenu from '../../components/rank-menu'
export default {
  name: 'm-main',
  components: {RankMenu},
  data: function () {
    return {}
  },
  methods: {
    changeMenu (name) {
      this.$router.push('/main/' + name)
    }
  }
}

</script>

<style scoped>

</style>
