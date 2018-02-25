<template>
  <v-layout row wrap>
    <v-flex xs6 sm6 md4 lg4>
      <v-text-field
        name="upid"
        v-model="uid"
        @keyup.enter="onUid"
        placeholder="请输入 UP 主 ID">
      </v-text-field>
    </v-flex>
    <v-flex xs2>
      <v-btn @click="onUid">确定</v-btn>
    </v-flex>
    <v-flex xs6 sm6 md4 lg4>
      <v-text-field
        name="upid"
        v-model="avid"
        prefix="av"
        @keyup.enter="onAvid"
        placeholder="或者输入ta制作的视频 av 号">
      </v-text-field>
    </v-flex>
    <v-flex xs2>
      <v-btn @click="onAvid">确定</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'inputUpInfo',
  data: function () {
    return {
      avid: '',
      uid: '423895'
    }
  },
  methods: {
    onAvid () {

    },
    onUid () {
      this.$store.dispatch('getUpDetailAction', this.uid)
    }
  }
}
</script>

<style scoped>

</style>
