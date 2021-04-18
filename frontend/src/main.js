import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueKinesis from 'vue-kinesis';
Vue.config.productionTip = false;
Vue.use(VueKinesis);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');