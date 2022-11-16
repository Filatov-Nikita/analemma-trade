import api from './utilities/service';

export async function show({ ids }) {
  return api.swot('basket.php', {
    searchParams: ids
  }).json();
}
