// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NewComponent from '@/components/NewComponent'
import NewComponentTwo from '@/components/NewComponentTwo'


Vue.config.productionTip = false
Vue.component("NewComponent", NewComponent);
Vue.component("NewComponentTwo",NewComponentTwo);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    msg: "Hello world!",
  },
  components: { App },
  template: '<App :msg="msg"/>'
})
