<template>
  <!--变量传进去的-->
  <div class="header" :style="{background:bga}">

    <button class="btn" @click="goHome">首页</button>

    <h2 class="title">
    <slot name="title">默认值</slot>
      <!--Movie-->
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
          bg:''
        }
      },
    methods: {
      goHome() {
        this.$router.push('/');
       // this.style.border=0;
      }
//      接收变量
    },props:['bga']
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
  background: transparent;
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
