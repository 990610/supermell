import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
// new 一个Vue实例，作为事件总线
Vue.prototype.$bus = new Vue ()

// 解决移动端300ms延迟
Fastclick.attach(document.body)
// 使用懒加载插件
 Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
