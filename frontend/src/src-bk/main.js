import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
import Store from './config/store'

import App from './App'

Vue.config.productionTip = false



new Vue({
  Store,
  render: h => h(App)
}).$mount('#app')