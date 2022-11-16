import api from './utilities/service';

export function show() {
  return api.swot.post('profile.php').json();
}

export function update(body) {
  return api.swot.post('update_profile.php', { body }).json();
}
