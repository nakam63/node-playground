import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import * as firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// Your firebase project info.
var config = {
  apiKey: "xxxx",
  authDomain: "xxx.firebaseapp.com",
  databaseURL: "https://xxx.firebaseio.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxx"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.usePublicVapidKey("xxxx"); //FCM web push certificate.

// Allow receiving notification.
messaging.requestPermission()
  .then(() => {
    console.log('Notification permission granted.');
    // Get token.
    messaging.getToken()
      .then((token) => {
        window.prompt('Your Token', token);
      })
  })
  .catch((err) => {
    console.log('Unable to get permission to notify.', err);
  }
);