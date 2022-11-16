import api from './utilities/service';

export async function categoriesList() {
  return api.swot('catalog_sec.php').json();
}

export async function list({ id }) {
  return api.swot('catalog_list.php', {
    searchParams: { id }
  }).json();
}


export async function show({ id }) {
  return api.swot('catalog_element.php', {
    searchParams: { id }
  }).json();
}
