import Vue from 'vue'
import '../node_modules/vuetify/dist/vuetify.min.css';
import App from './App'
import Vuetify from 'vuetify'

import VueSocketIO from "vue-socket.io";

Vue.use(Vuetify)
Vue.use(
    new VueSocketIO({
        debug: true,
        connection: "http://192.168.1.149:8000" // Local Express Server
    })
);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})