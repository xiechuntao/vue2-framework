import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/styles/index.styl'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* knowledge: $mount为手动挂载, 可在挂载前进行一些判断，延时等其他操作 */
new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
