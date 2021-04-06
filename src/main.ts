import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'vue-good-table/dist/vue-good-table.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/index.scss';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  router,
  render: (h) => h(App),
})
.$mount("#app");
