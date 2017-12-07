<template>
<ul class="musicList">
    <li v-for="elem in albums" v-if="showImg" class="musicDetail">
      <router-link to="musicDetail">
        <div class="MusicImg">
          <img :src="elem.bg" alt="">
        </div>
      </router-link>

    </li>

</ul>
</template>
<script>
  import Axios from 'axios'
  export default {
    data(){
      return{
        albums:[],
        showImg:false
      }
    },
    mounted(){
      Axios.get("/static/data/musiclist.json").then(res=>{
        this.albums = res.data.albums;
        this.showImg = true;
    }).catch(()=>{})
    }
  }
</script>
<style scoped>
.musicList{
  margin-top:1rem;
  margin-bottom:1rem;
}
.MusicImg{
  float: left;
  width: 50%;
}
  .musicList img{
    width: 100%;
  }
</style>
