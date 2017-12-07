<template>
  <div>
    <ul class="footer" :style="{background:bg}">
      <li> <router-link to="/movie/movieList">电影</router-link></li>
      <li> <router-link to="/music">音乐</router-link></li>
      <li> <router-link to="/book">书籍</router-link></li>
      <li> <router-link to="/photos">图片</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {

      }
    },props:['bg']
  }
</script>

<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  height: 1rem;
  width: 100%;
  background: rgb(33,150,243);
  display: flex;
}
.footer li{
  /*flex: 是集合属性;*/
  flex-grow: 1;
  color: white;
  line-height: 1rem;
  text-align: center;
}
  .footer a{
    color: #cccccc;
  }
  .footer a.router-link-active{
    color: white;
  }
</style>
