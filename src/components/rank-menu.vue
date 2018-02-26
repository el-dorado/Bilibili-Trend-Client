<template>
 <v-layout>
   <v-flex>
     <template v-for="rank of navInfo">
       <v-btn
         :key="rank.name"
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
    }
  },
  data: function () {
    return {
      defaultRank: '1',
      rankInfo: [
        {
          rname: '三日内',
          mark: '3'
        },
        {
          rname: '日排行',
          mark: '1'
        },
        {
          rname: '周排行',
          mark: '7'
        },
        {
          rname: '月排行',
          mark: '30'
        }
      ],
      navInfo: [
        {
          router: 'all',
          name: '全站榜'
        },
        {
          router: 'bangumi',
          name: '新番榜'
        },
        {
          router: 'origin',
          name: '原创榜'
        },
        {
          router: 'cinema',
          name: '影视榜'
        },
        {
          router: 'rookie',
          name: '新人榜'
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>
