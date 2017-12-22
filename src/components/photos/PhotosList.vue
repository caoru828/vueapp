<template>
  <div class="photos">

    <ul>
      <li v-for="(photo,index) in photoList" :key="index">
        <img :src="photo.src" alt="">
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
    }).catch()
  }
}


</script>
<style scoped>
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
