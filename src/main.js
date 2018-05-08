import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
Vue.use(VueRouter)

//Filters
Vue.filter('limit', function(value){
  if(value.length < 120){
    return value;  
  } else {
    return value.slice(0,120) + '...';
  }
});

export const bus = new Vue();

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

router.beforeEach(function (to, from, next) { 
  window.scrollTo(0, 0);
  next();
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
