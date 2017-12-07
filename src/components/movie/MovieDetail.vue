<template>
  <div class="detail">
    <!--{{$route.params.movieID}}-->
    <div>
      <img :src="this.imgSrc" alt="">
    </div>
    <div class="MovieDetail">
     <div>{{detail.nm}}</div>
      {{detail.dir}}
      <br>
      {{this.Info}}

    </div>


  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    data(){
      return{
        detail:{},
//        name:[],
        imgSrc:"",
//        star:'',
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
//        this.name=res.data.data.MovieDetailModel.nm;
        this.detail=res.data.data.MovieDetailModel;
        this.imgSrc = res.data.data.MovieDetailModel.img;
//        this.star = res.data.data.MovieDetailModel.dir;
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
  margin-bottom:1rem;
}
</style>
