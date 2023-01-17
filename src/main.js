import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import VueSimpleContextMenu from 'vue-simple-context-menu';
import 'vue-simple-context-menu/dist/vue-simple-context-menu.css';
import './plugins/vee-validate'
import axios from 'axios';

var token = localStorage.getItem('token')
if(token)
axios.defaults.headers.common['Authorization']= 'Beaarer ' + token ;


axios.defaults.baseURL = "http://api-tecwebprod.escomproyectos.com/api/";
const app = createApp(App)
app.component('vue-simple-context-menu', VueSimpleContextMenu);
installElementPlus(app)
app.use(store).use(store).use(router).mount('#app')