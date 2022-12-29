import { createApp } from 'vue';
import App from './App.vue';
import './base.css';

function bootstrapClient() {
  const app = createApp(App);
  app.mount('#app');
}

bootstrapClient();
