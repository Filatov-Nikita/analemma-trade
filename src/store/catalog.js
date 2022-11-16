import * as CatalogAPI from 'src/api/catalog';

export default {
  namespaced: true,
  state: {
    categories: null
  },
  getters: {
    categories(state) {
      if(!state.categories) return null;
      return state.categories.map(tab => ( { label: tab.name, value: tab.id } ));
    }
  },
  mutations: {
    appendTo(state, [key, payload]) {
      state[key] = payload;
    }
  },
  actions: {
    async getCatalog(_c, { id }) {
      const data = await CatalogAPI.list({ id });
      return data;
    },
    async getOne(_c, { id }) {
      const data = await CatalogAPI.show({ id });
      return data[0];
    },
    async getCategories({ commit }) {
      const data = await CatalogAPI.categoriesList();
      commit('appendTo', ['categories', data]);
      return data;
    }
  }
}
