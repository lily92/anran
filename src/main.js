import './css/bootstrap.min.css'
import './lib/swiper/css/swiper.css'
import './lib/fullpage/fullpage.css'
import './css/animate.css'
import './scss/main.scss'
import Vue from "vue/dist/vue.esm.browser.min";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueFullPage from "vue-fullpage.js";

Vue.use(VueFullPage);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false;

window.vm = new Vue({
    components: require('./components')
}).$mount("#app");



