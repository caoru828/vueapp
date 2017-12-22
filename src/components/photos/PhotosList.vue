<template>
  <div class="photos">

    <ul>
      <li v-for="(photo,index) in photoList" :key="index">
        <router-link :to="'/photos/photosDetail/'+ index">
          <img :src="photo.src" alt="">
        </router-link>

      </li>
    </ul>

  </div>
</template>
<script>

import Axios from 'axios'
export default {
  data(){
    return{
      photoList : []
    }
  },
  mounted(){
//    promise对象
    Axios.get('/static/data/photodata.json').then(res=>{
        this.photoList= res.data.photoData;
//      存到vuex里
        this.$store.dispatch('setPhotoList',res.data.photoData)
    }).catch(err=>{})
  }
}


</script>
<style scoped>
  @import url(../../assets/css/common.css);
  .photos{
    margin-top:1rem;
    margin-bottom: 1rem;
  }
  .photos li{
    width: 50%;
    display: inline-block;
  }
  .photos img{
    width: 100%;
  }

</style>
