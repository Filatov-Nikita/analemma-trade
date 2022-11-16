import api from './utilities/service'

export async function categoriesList() {
  return api.swot('kotirovki_sec.php').json();
}

export async function list({ id }) {
  return api.swot('kotirovki_list.php', {
    searchParams: { id }
  }).json();
}
