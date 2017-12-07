<template>
<div class="music">
  <common-header bg="rgb(0, 150, 136)">
    <h2 slot="title">Music</h2>
  </common-header>
  <router-view></router-view>
  <common-footer bg="rgb(0, 150, 136)"></common-footer>

</div>
</template>
<script>
  import CommonHeader from '../common/Header'
  import CommonFooter from '../common/Footer'


  export default {
    components: {
      CommonHeader,
      CommonFooter
    }
  }
</script>
<style scoped>

</style>
