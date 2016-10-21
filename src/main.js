import Vue from 'vue';
import Router from "vue-router";
import Home from "./page/Home";
import NewArrival from "./page/NewArrival";
import Brand from "./page/Brand";
import Represent from "./page/Represent";
import Apply from "./page/Apply";
import Activity from "./page/Activity";
import Top from "./page/Top";
import App from './App';
//将vue的router中间注册给vue框架
Vue.use(Router);
new Vue({
  el: '#app',
  //为当前Vue的APP实例配置个性化路由
  router : new Router({
  	mode : "history", //确保服务端开放路径访问权限
  	routes : [
  		{
  			path : "/",
  			component : Home
  		},
  		{
  			path : "/newArrival",
  			component : NewArrival
  		},
  		{
  			path : "/brand",
  			component : Brand
  		},
  		{
  			path : "/represent",
  			component : Represent
  		},
  		{
  			path : "/apply",
  			component : Apply
  		},
  		{
  			path : "/activity",
  			component : Activity
  		},
      {
        path : "/Top",
        component : Top
      }
  	]
  }),
  render: h => h(App)
})