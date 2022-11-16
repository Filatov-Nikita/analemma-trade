import api from './utilities/service';

export function list() {
  return api.swot('points.php').json();
}
