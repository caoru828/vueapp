<template>
  <div class="photos">

    <common-header  bga="rgb(63, 81, 181)">
      <h2 slot="title">Photos</h2>
    </common-header>
    <router-view></router-view>
    <common-footer bga="rgb(63, 81, 181)"></common-footer>
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
