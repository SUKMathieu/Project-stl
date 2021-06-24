import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css';

const vue3DModel = require('vue-3d-model')

Vue.config.productionTip = false
Vue.use(vue3DModel);
Vue.use(Buefy);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
