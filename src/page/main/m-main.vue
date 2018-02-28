<template>
  <div>
    <v-layout column>
      <rank-menu
        :rank-info="rankInfo"
        v-on:onchangerank="changeRank"
        v-on:onchangemenu="changeMenu">
      </rank-menu>
      <rank-tab :tabs="tabs" v-on:onchangetab="changeTab"></rank-tab>
    </v-layout>
    <v-layout>
     <rank-list></rank-list>
    </v-layout>
  </div>
</template>

<script>
import RankMenu from '../../components/rank-menu'
import RankTab from '../../components/rank-tab'
import {BANGUMI_RANK, BANGUMI_TABS, CINEMA_TABS, FULL_RANK, FULL_TABS} from '../../helper/config'
import RankList from '../../components/common/rankList'

export default {
  name: 'm-main',
  components: {RankList, RankTab, RankMenu},
  created: function () {
    this.$store.dispatch('getRankListAction', `${this.$route.name}-${this.rank}-0` + '.json')
  },
  data: function () {
    return {
      tabs: FULL_TABS,
      selectTab: 0,
      rankInfo: FULL_RANK,
      rank: 3,
      tab: 0,
      REQ_URL: ''
    }
  },
  methods: {
    changeMenu (name) {
      this.$router.push('/main/' + name)
    },
    changeTab (e) {
      this.selectTab = e
      this.tab = this.tabs[e].mark
      this.REQ_URL = `${this.$route.name}-${this.rank}-${this.tab}`
    },
    changeRank (e) {
      this.rank = e
      this.REQ_URL = `${this.$route.name}-${this.rank}-${this.tab}`
    }
  },
  watch: {
    REQ_URL: function () {
      this.$store.dispatch('getRankListAction', this.REQ_URL + '.json')
    },
    '$route': function (to, from) {
      this.REQ_URL = `${this.$route.name}-${this.rank}-${this.tab}`
      switch (this.$route.name) {
        case 'all':
          this.rankInfo = FULL_RANK
          this.tabs = FULL_TABS
          break
        case 'bangumi':
          this.rankInfo = BANGUMI_RANK
          this.tabs = BANGUMI_TABS
          break
        case 'rookie':
          this.rankInfo = FULL_RANK
          this.tabs = FULL_TABS
          break
        case 'origin':
          this.rankInfo = FULL_RANK
          this.tabs = FULL_TABS
          break
        case 'cinema':
          this.rankInfo = FULL_RANK
          this.tabs = CINEMA_TABS
          break
        default:
          this.rankInfo = FULL_RANK
          this.tabs = FULL_TABS
      }
    }
  }
}

</script>

<style scoped>

</style>
