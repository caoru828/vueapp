<template>
  <div class="photosDetail">
    <h1>{{$route.params.index}}</h1>
  </div>
</template>
<script>
export default {
  mounted (){
    console.log(this.$store.state.photosList);
  }
}
//45.54

</script>
<style scoped>
.photosDetail{
  margin:1rem 0;
  height: 100%;

}
</style>
