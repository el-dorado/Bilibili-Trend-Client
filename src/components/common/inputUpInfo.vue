<template>
  <v-layout row wrap>
    <v-flex xs6 sm2 md4 lg4>
      <v-text-field
        name="upid"
        v-model="uid"
        @keyup.enter="onUid"
        type="number"
        placeholder="请输入 UP 主 ID">
      </v-text-field>
    </v-flex>
    <v-flex xs4 sm2>
      <v-btn @click="onUid">确定</v-btn>
    </v-flex>
    <!--todo: 近期进行重构-->
    <v-flex xs6 sm3 md4 lg4>
      <v-select
        v-model="name"
        autocomplete
        cache-items
        :search-input.sync="search"
        :items="RecUp"
        label="尝试直接输入 UP 主昵称"
        :disabled="true">
      </v-select>
    </v-flex>
    <v-flex xs2>
      <v-btn @click="onName" :disabled="true">暂时无法使用</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'inputUpInfo',
  data: function () {
    return {
      name: '',
      uid: '423895',
      search: null

    }
  },
  methods: {
    onUid () {
      this.$store.commit('changeBtnState', true)
      this.$store.commit('changeUpMidState', this.uid)
    },
    query (v) {

    },
    onName () {

    }
  },
  watch: {
    search (val) {
      val && this.query(val)
    }
  },
  computed: {
    ...mapState(['RecUp', 'RecUpMID'])
  }
}
</script>

<style scoped>

</style>
