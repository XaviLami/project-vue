import Vue from 'vue'
import App from './App.vue'

import BaseButton from './components/global/BaseButton.vue'

Vue.config.productionTip = false
Vue.component('base-button', BaseButton )
new Vue({
  render: h => h(App)
}).$mount('#app')
