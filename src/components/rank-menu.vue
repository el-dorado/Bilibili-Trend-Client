<template>
 <v-layout>
   <v-flex>
     <template v-for="rank of navInfo">
       <v-btn
         :key="rank.name" :disabled="rank.router === 'bangumi' || rank.router === 'cinema'"
         @click="onChangeMenu(rank.router)">{{rank.name}}</v-btn>
     </template>
   </v-flex>
   <v-flex>
     <v-select :items="rankInfo"
               item-text="rname"
               item-value="mark"
               v-model="defaultRank">
     </v-select>
   </v-flex>
 </v-layout>
</template>

<script>
export default {
  name: 'rank-menu',
  methods: {
    onChangeMenu (router) {
      this.$emit('onchangemenu', router)
    },
    onChangeRank () {
      this.$emit('onchangerank', this.defaultRank)
    }
  },
  props: ['rankInfo'],
  data: function () {
    return {
      finalUrl: '',
      defaultRank: 3,
      navInfo: [
        {router: 'all', name: '全站榜'},
        {router: 'bangumi', name: '新番榜'},
        {router: 'origin', name: '原创榜'},
        {router: 'cinema', name: '影视榜'},
        {router: 'rookie', name: '新人榜'}
      ]
    }
  },
  beforeCreate: function () {

  },
  created: function () {

  },
  watch: {
    '$route': function (to, from) {
      this.onChangeRank()
    },
    defaultRank: function () {
      this.onChangeRank()
    }
  }
}
</script>

<style scoped>

</style>
