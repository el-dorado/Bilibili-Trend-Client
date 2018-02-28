<template>
  <v-layout justify-center align-center>
    <v-btn-toggle ref="btg" @change="onChange" v-model="selectTab">
      <v-flex>
        <template v-for="tab of tabs">
          <v-btn :key="tab.mark" flat>{{tab.name}}</v-btn>
        </template>
      </v-flex>
    </v-btn-toggle>
  </v-layout>
</template>

<script>
export default {
  name: 'rank-tab',
  methods: {
    onChange (e) {
      this.$emit('onchangetab', this.selectTab)
    }
  },
  props: ['tabs'],
  data: function () {
    return {
      selectTab: 0
    }
  },
  mounted: function () {
  },
  watch: {
    '$route': function (to, from) {
      this.selectTab = 0

      // this.$refs.btg.$children[this.selectTab].$el.classList.remove('btn--active')
      // this.$refs.btg.$children[this.selectTab].$el.classList.add('btn--active')
      // this.$refs.btg.$children[this.selectTab].isActive = true
      // console.log(this.$refs.btg.$children[this.selectTab].isActive)
    }
  }
}
</script>

<style scoped>

</style>
