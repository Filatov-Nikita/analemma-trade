import { Notify } from 'quasar';
import { registr } from 'src/api/fcm';

export default async () => {
  async function update() {
    try {
      const token = await cordova.plugins.firebase.messaging.getToken();
      await registr({ token });
      window.localStorage.setItem('pushToken', token);
      debugger;
      console.log(token);
    } catch {
      window.localStorage.removeItem('pushToken');
      console.error('Не удалось обновить токен');
    }
  }

  document.addEventListener('deviceready', async () => {
    cordova.plugins.firebase.messaging.requestPermission({ forceShow: false }).then(function() {
      console.log("Push messaging is allowed");
    });

    cordova.plugins.firebase.messaging.onTokenRefresh(function() {
      console.log("Device token updated");
      update();
    });

    cordova.plugins.firebase.messaging.onBackgroundMessage(function(payload) {
      console.log("New background FCM message: ", payload);
    });

    cordova.plugins.firebase.messaging.onMessage(function(payload) {
      console.log("New foreground FCM message: ", payload);
      const { title, body } = payload.aps.alert;
      Notify.create({
        type: 'positive',
        message: `${title}: ${body}`
      });
    });

    update();
  }, false)
}
