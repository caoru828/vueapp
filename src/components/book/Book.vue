<template>
  <div class="book">
    <common-header  bga="rgb(121, 85, 72)">
      <h2 slot="title">Book</h2>
    </common-header>
    <router-view></router-view>
    <swipe class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
    </swipe>
    <common-footer bga="rgb(121, 85, 72)"></common-footer>
  </div>

</template>
<script>
  import CommonHeader from '../common/Header'
  import CommonFooter from '../common/Footer'
  require('vue-swipe/dist/vue-swipe.css');
  import { Swipe, SwipeItem } from 'vue-swipe';

  export default {
    components: {
      CommonHeader,
      CommonFooter,
      'swipe': Swipe,
      'swipe-item':SwipeItem
    }
  }
</script>
<style scoped>
  .my-swipe {
    margin-top: 1rem;
    height: 9.5rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide1 {
    background: url('https://img3.doubanio.com/lpic/s24468373.jpg') no-repeat 0 0/contain;
    color: #fff;
  }

  .slide2 {
    background: url('https://img3.doubanio.com/lpic/s6989253.jpg') no-repeat 0 0/contain;
    color: #000;
  }

  .slide3 {
    background: url('https://img3.doubanio.com/lpic/s27102925.jpg') no-repeat 0 0/contain;
    color: #fff;
  }

</style>
