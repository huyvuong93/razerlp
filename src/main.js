import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Scrollanimation from './directives/scroll'

Vue.directive('scroll', Scrollanimation)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
