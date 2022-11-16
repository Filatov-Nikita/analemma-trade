import api from './utilities/service';

export function list() {
  return api.swot('order_list.php').json();
}

export function create(body) {
  return api.swot.post('create_order.php', { body }).json();
}

export function sellProduct(body) {
  return api.swot.post('create_selling.php', { body });
}
