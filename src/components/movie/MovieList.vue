<template>
  <div class="List">
    <ul>
      <!--key便与虚拟dom查找，-->
      <li v-for="(movie) in movieList" :key="movie.id"></li>
      <img :src="movie.img" alt="">
      </ul>
  </div>
</template>

<script>
//  这个可以在package.json里找到axios
import Axios from 'axios'
Axios.get

  export default {
  data(){
    return{
      movieList:[]
    }
  },
    components: {

    },
//    加载完成时
    mounted(){

       Axios.get(API_PROXY +"http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=0")
         .then((res)=>{
         console.log(res);
         this.movieList = res.data.data.movies;
       })
         .catch(()=>{});
    }
  }
</script>

<style scoped>
.List{
  margin-top: 1rem;
}
</style>
