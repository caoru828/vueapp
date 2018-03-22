# vueapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


项目
简述
电影部分调用猫眼接口
发送ajax请求用的是axios（作者推荐）跟vue结合的一种方式
输入url地址之后

电影功能：
显示电影界面，一个header一个footer，中间是电影信息，电影信息通过猫眼电影接口获取的信息，每次访问10条信息，下滑到底有加载那个gif图标，再接着显示10条，每一个电影点进去都能查看详情，这些信息也是从猫眼接口获取的




音乐功能：
有各种榜单，飙升榜，新歌榜，但是接口不好使了，就把这些数据写成  .json文件模拟后台，读取数据也得发送ajax请求，接口坏了，点击每个不同榜单返回同一个音乐界面，有6个音乐，每个都可以播放，会有相应歌词，点下边的footer中的music时，header、footer会换颜色


书籍功能：
里边有个轮播图，轮播图可以左滑右滑


图片功能：
有10多张图片，每点击一张小图会显示对应大图，并可以左划右划切换图片，再点击返回小图，header里还有首页，点击可回到首页movie


难点
1.
axios发送异步请求 vue结合ajax
安装之后 引入
方法调用 Axios.get('url').then( (res)=>{} ).catch( ()=>{} );
axios要写在mounted里（组件渲染完成之后，操作dom，axios请求都在这里）
每次请求10条，offset后边参数在变化 当前长度拼接到offset后边，从当前长度开始取  "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset="+this.movieList.length;
直接调用猫眼接口有跨域问题，需要服务器代理  'http://bird.ioliu.cn/v1/?url='
将猫眼接口拼在后边即可

2.
换字：以及切换header里的title
，slot不传参就是默认值， （slot相当于占位符，穿了以穿的为准，
不传就是默认值）
header.vue
<div><slot  name = “title”>默认值</slot> </div>
movie.vue
<common-header>
 <span slot="title">Movie </span>
<common-header>

3.换颜色(父组件向子组件传值)
动态传值：传html结构或者代码段用slot，属性用prop传值，
父组件把值传给子组件，传属性的时候自定义属性，
(从music往header里传属性颜色)
Music.vue
<commmon-header bg="rgb(0,150,136)"></common-header>
header.vue
<div class="header" :style={background:bg}></div>
需要配一下props:['bg']

4.
