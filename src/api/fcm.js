import api from './utilities/service';

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
