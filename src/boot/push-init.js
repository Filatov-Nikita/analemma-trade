export default async () => {

  document.addEventListener('deviceready', async () => {

    const token = await cordova.plugins.firebase.messaging.getToken();
    console.log(token);

    cordova.plugins.firebase.messaging.onBackgroundMessage(function(payload) {
      console.log("New background FCM message: ", payload);
    });

    cordova.plugins.firebase.messaging.requestPermission({ forceShow: false }).then(function() {
      console.log("Push messaging is allowed");
    });

  }, false)
}
