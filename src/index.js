import Vue from 'vue';
import router from './router';
import App from './App';

import 'assets/css/normalize.css';
import 'assets/css/app.styl';
import 'assets/css/animations.styl';

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
