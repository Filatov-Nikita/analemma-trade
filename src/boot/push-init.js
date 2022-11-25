import { Notify, Platform } from 'quasar';
import { update } from 'src/api/fcm';

export default async () => {
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

      let msg = {};
      if(Platform.is.ios) {
        msg = payload?.aps?.alert || {};
      } else if (Platform.is.android) {
        msg = payload?.gcm || {};
      }

      Notify.create({
        type: 'positive',
        message: `${msg?.title}: ${msg?.body}`
      });
    });

    update();
  }, false)
}
