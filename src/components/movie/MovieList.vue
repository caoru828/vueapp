<template>
  <div class="List">
    <ul>
      <!--key便与虚拟dom查找，-->
      <li v-for="movie in movieList" class="movieDetail">
        <div class="movieImg">
          <img :src="movie.img" alt="">
        </div>
        <div class="movieDescription">
          <p  class="movieName">片名：   {{movie.nm}}</p>
          <p>主演：   {{movie.star}}</p>
          <p>{{movie.ver}}</p>
          <p>电影描述：{{movie.showInfo}}</p>
        </div>
      </li>

      </ul>

    <div v-show="ImgShow" class="loadding">
      <img src="../../assets/img/loading.gif" alt="">
    </div>

    <div v-show="tip" class="bbottom">
      <h4>到底了！！！</h4>
    </div>

    <!--<movie-list v-for="(obj,index) in movieList" :key="index" :title="obj.nm" :year="obj.snum"-->
                <!--:avg = "obj.sc" :img = "obj.img" :desc = "obj.cat"-->
    <!--&gt;</movie-list>-->
  </div>
</template>

<script>
//  这个可以在package.json里找到axios
import Axios from 'axios'


  export default {
  data(){
    return{
      movieList:[],
      ImgShow:true,
      tip : false
    }
  },
    methods:{
      loadding(){
        Axios.get(API_PROXY +"http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset="+this.movieList.length
        )
          .then(res=>{
//         console.log(res);
            let List;
            this.ImgShow = false;
            let data = res.data.data.movies;
            if(data.length<10){
              this.tip = true;

            }
            this.ImgShow = false;
            this.movieList = this.movieList.concat(data);
          })
          .catch(()=>{
            alert("获取数据失败！");
          });

      }

    },
//    加载完成时
    mounted(){
    window.onscroll = () => {
      let clientheight = document.documentElement.clientHeight;
//      let sc   = document.documentElement.scrollTop;
      let scbody   = document.documentElement.scrollTop||document.body.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollHeight == clientheight + scbody) {

        this.ImgShow = true;

        this.loadding();
        console.log("到底了！");
      }
    }


//    URL远程猫眼接口
    let URL1 = API_PROXY +"http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset="+this.movieList.length;
//   本地不好使的时候
    let URL2 =  '/static/moviedata.json';
//      Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+this.movieList.length+"&limit=10")
     this.loadding();
    }
  }
</script>

<style scoped>
.List{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
  .movieDetail{
    padding: 0.2rem;
    display: flex;
    border-bottom: 1px solid grey;
  }
  .movieImg{
    flex-grow: 1;
    width: 0;
  }
  .movieDescription{
    padding: 0.2rem;
    flex-grow:2;
    width: 0;
  }
  .movieName{
    font-weight: bold;
  }
  .loadding{
    text-align: center;
    margin-bottom: 1rem;
  }
  .bbottom{
    margin-bottom: 1rem;
  }
</style>
