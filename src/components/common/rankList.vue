<template>
    <div></div>
</template>

<script>

export default {
  name: 'rankList',
  data: function () {
    return {

    }
  },
  beforeCreate: function () {
    console.log(this.$route.name)
  },
  watch: {
    $route (to, from) {
    }
  }
}
</script>

<style scoped>

</style>
