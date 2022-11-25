import api from './utilities/service';
import { Platform } from 'quasar';

export function list(body) {
  return api.swot.post('push_list.php', { body }).json();
}

export function categoriesList() {
  return api.swot('push_sec.php').json();
}

export function read(body) {
  return api.swot.post('push_do_readed.php', { body });
}

export function registr({ token }) {
  const body = new FormData();
  body.append('token_fcm', token);
  return api.swot.post('fcm.php', { body });
}


export async function update() {
  if(!Platform.is.cordova) return;

  try {
    const token = await cordova.plugins.firebase.messaging.getToken();
    await registr({ token });
    window.localStorage.setItem('pushToken', token);
    console.log(token);
  } catch {
    window.localStorage.removeItem('pushToken');
    console.error('Не удалось обновить токен');
  }
}
