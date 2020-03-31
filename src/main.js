import Vue from 'vue'
import App from './App.vue'
import { VueAxios } from './utils/request'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueAxios)

new Vue({
  render: h => h(App),
}).$mount('#app')
