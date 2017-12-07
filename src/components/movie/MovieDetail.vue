<template>
  <div class="detail">
    <!--{{$route.params.movieID}}-->
    <div>
      <img :src="this.imgSrc" alt="">
    </div>
    <div class="MovieDetail">
     <div>{{this.name}}</div>
      <p>{{this.star}}</p>
      {{this.Info}}
    </div>


  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    data(){
      return{
        name:[],
        imgSrc:"",
        star:'',
        Info:''
      }
    },
    mounted(){
      let URL3 = API_PROXY+
        "http://m.maoyan.com/movie/"+
        this.$route.params.movieID +
        ".json";

      Axios.get(URL3)
      .then(res=>{
        this.name=res.data.data.MovieDetailModel.nm;
        this.imgSrc = res.data.data.MovieDetailModel.img;
        this.star = res.data.data.MovieDetailModel.dir;
        this.Info = res.data.data.MovieDetailModel.dra;
        console.log(res);
      }).catch()
    },
    components: {

    }
  }
</script>

<style scoped>
.detail{
  margin-top: 1rem;
}
</style>
