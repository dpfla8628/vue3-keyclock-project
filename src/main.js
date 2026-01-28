import { createApp } from 'vue';
import App from './App.vue';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://192.168.101.205:8080/',
  realm: 'test', // 생성한 Realm 이름
  clientId: 'test-client', // 생성한 Client ID
});

keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
  if (authenticated) {
    console.log('Authenticated');
    createApp(App).mount('#app');
  } else {
    window.location.reload();
  }
}).catch((error) => {
  console.error('Failed to initialize Keycloak', error);
});
