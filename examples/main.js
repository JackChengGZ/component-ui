import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import ComponentUI from './../packages/index'
Vue.config.productionTip = false
Vue.use(ComponentUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
