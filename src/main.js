import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faVimeoV, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';

library.add(faGithub, faVimeoV, faInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
