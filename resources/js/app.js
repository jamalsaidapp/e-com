import router from './router'
require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('app', require('./Frontend/Layouts/App.vue').default);


const app = new Vue({
    el: '#app',
    router
});
