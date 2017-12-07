<template>
  <div class="book">
    ssss
    <common-header  bg="rgb(121, 85, 72)">
      <h2 slot="title">Book</h2>
    </common-header>
    <router-view></router-view>
    <common-footer bg="rgb(121, 85, 72)"></common-footer>
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
