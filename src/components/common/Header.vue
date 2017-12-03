<template>
  <div class="header">
    <button class="btn">首页</button>
    <h2 class="title">Movie</h2>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
.header {
  height: 1rem;
  background: rgb(33, 150, 243);
  position: fixed;
  top: 0;
  width: 100%;
}
.btn{
  background: rgb(33,150,243);
  border:0;
  padding-top:0 ;
  padding-bottom: 0;
  line-height: 1rem;
  color: white;

}
.title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
}
  /*position: absolute;*/
  /*top:50%;*/
  /*left: 50%;*/



</style>
