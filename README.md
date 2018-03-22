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


axios发送异步请求 vue结合ajax
安装之后 引入
方法调用 Axios.get('url').then( (res)=>{} ).catch( ()=>{} );
axios要写在mounted里（组件渲染完成之后，操作dom，axios请求都在这里）
每次请求10条，offset后边参数在变化 当前长度拼接到offset后边，从当前长度开始取  "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset="+this.movieList.length;
直接调用猫眼接口有跨域问题，需要服务器代理  'http://bird.ioliu.cn/v1/?url='
将猫眼接口拼在后边即可


