<template>
  <div>
    <ul class="footer">
      <li>电影</li>
      <li>音乐</li>
      <li>书籍</li>
      <li>图片</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {

      }
    }
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
</style>
