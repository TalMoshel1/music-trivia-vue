import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router';
import pinia from './plugins/pinia';
import './globals';

createApp(App).use(router).use(pinia).mount('#app');
