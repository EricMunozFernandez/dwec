import Vue from 'vue'
import App from './App.vue'

import VuePaginate from 'vue-paginate';
Vue.use(VuePaginate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
