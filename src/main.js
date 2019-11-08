import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueParticles from "vue-particles";
import VeeValidation from "vee-validate";
import NavBar from "./layout/withNavBar.vue";
import NoNavBar from "./layout/withoutNavBar.vue";
import { FormInputPlugin } from "bootstrap-vue";

Vue.use(FormInputPlugin);
Vue.component("no-navbar-layout", NoNavBar);
Vue.component("navbar-layout", NavBar);
Vue.use(VueParticles);
Vue.use(VeeValidation);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
