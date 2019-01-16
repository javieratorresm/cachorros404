import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VShowSlide from 'v-show-slide';
import VueLocalStorage from 'vue-localstorage';
import store from './vuex-store.js';
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons/lock';
import 'vue-awesome/icons/user';
import 'vue-awesome/icons/pencil-alt';
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/check';
import 'vue-awesome/icons/map-marker-alt';
import 'vue-awesome/icons/user';

Vue.component('icon', Icon);
Vue.use(VueRouter);
Vue.use(VShowSlide)
Vue.use(VueResource);
Vue.use(VueLocalStorage);
Vue.use(Vuex);


Vue.mixin({
  data: function() {
    return {
      get getConstants() {
        return {
                API_URL:process.env.API_URL
                //API_URL:"http://10.0.1.65:4002/"
              };
      },
    }

  }
})


const routes = [
  {
    path: '/',
    redirect: { name: 'dashboard'},
    component: Dashboard
  },
  {
    path: '/perfil',
    name:"perfil",
    component: Perfil,
    beforeEnter:is_logged
  }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})
Vue.use(VShowSlide, {
  customEasing: {
    exampleEasing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
