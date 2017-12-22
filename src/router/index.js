import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
import Music from '@/components/music/Music'
import MusicList from '@/components/music/MusicList'
import MusicDetail from '@/components/music/MusicDetail'
import Photos from '@/components/photos/Photos'
import PhotosList from '@/components/photos/PhotosList'
import PhotosDetail from '@/components/photos/PhotosDetail'
import Book from '@/components/book/Book'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MovieList,
      redirect:'/movie/movieList'
      // redirect:'/book'
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
      redirect:'/music/musicList',
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
    },{
      path:'/book',
      name:'book',
      component:Book
    },{
      path:'/photos',
      name:'photos',
      component:Photos,
      redirect:'/photos/photosList',
      children:[
        {
          path:'photosList',
          name:'photosList',
          component : PhotosList
        },{
          path:'photosDetail/:index',
          name:'photosDetail',
          component : PhotosDetail
        }
      ]
    }
  ]
})
