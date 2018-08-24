import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home/Home.vue'
import ListComics from './components/ListComics/ListComicsTemplate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/comics',
      name: 'comics',
      component: ListComics
    }
  ]
})
