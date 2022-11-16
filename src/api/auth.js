import api from './utilities/service';

export function login(body) {
  return api.swot.post('auth.php', { body });
}

export function getToken(body) {
  return api.swot.post('token.php', { body }).json();
}
