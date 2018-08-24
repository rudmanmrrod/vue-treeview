import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VJstree from 'vue-jstree'

Vue.config.productionTip = false
Vue.use(VJstree)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
