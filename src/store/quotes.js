import * as QuotesAPI from 'src/api/quotes';

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
    async getQuotes(_c, { id }) {
      const data = await QuotesAPI.list({ id });
      return data;
    },
    async getCategories({ commit }) {
      const data = await QuotesAPI.categoriesList();
      commit('appendTo', ['categories', data]);
      return data;
    }
  }
}
