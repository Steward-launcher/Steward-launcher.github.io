import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store, { initStore } from './store'
import Antd, { FormModel } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './services/base';
import i18n from './i18n'

Vue.use(Antd);
Vue.use(FormModel);
Vue.config.productionTip = false

initStore()

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
