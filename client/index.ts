import { createApp } from 'vue';
import App from './App.vue';

function bootstrapClient() {
  const app = createApp(App);

  app.mount('#app');
}

bootstrapClient();
