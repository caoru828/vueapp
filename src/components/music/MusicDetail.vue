<template>
  <div class="musicDetail" v-if="musicShow">
    <!--<h1 class="detail">musicdetail</h1>-->
    <VueAplayer :music="songs" :autoplay=true :showlrc="3"></VueAplayer>
  </div>
</template>
<script>
  import VueAplayer from 'vue-aplayer'
  import Axios from 'axios'
  export default {
    data(){
      return{
        songs:[],
        musicShow:false
      }
    },
    components:{
      VueAplayer
    },mounted(){
      Axios.get("/static/data/musicdata.json").then(res=>{
        console.log(res);
        let list = res.data.musicData;
        list.forEach(elem=>{
          this.songs.push({
            title: elem.title,
            author: elem.author,
            url:elem.src,
            pic : elem.musicImgSrc,
            lrc :"/static/"+ elem.lrc
          }

          )
        })
        this.musicShow = true
      }).catch();

    }
  }
</script>
<style scoped>
.musicDetail{
  margin-top: 1rem;
}

</style>
