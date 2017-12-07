import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
import Music from '@/components/music/Music'
import MusicList from '@/components/music/MusicList'
import MusicDetail from '@/components/music/MusicDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/movie/movieList'
    },{
      path:'/movie',
      component:Movie,
      children:[
        {
         path:'/movie/movieList',
          name:'moveList',
         component:MovieList
        },{
          path:'/movie/movieDetail/:movieID',
          name:'moveDetail',
          component:MovieDetail
        }

        ]
    },{
      path:'/music',
      name:'music',
      component:Music,
      children:[
        {
          path:'musicList',
          name:'musicList',
          component:MusicList
        },{
          path:'musicDetail',
          name:'musicDetail',
          component:MusicDetail
        }

      ]
    }
  ]
})
