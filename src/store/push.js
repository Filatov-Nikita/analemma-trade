import * as PushAPI from 'src/api/fcm';

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
    setItems(state, [key, payload]) {
      state[key] = payload;
    }
  },
  actions: {
    async getCategories({ commit }) {
      const data = await PushAPI.categoriesList();
      commit('setItems', ['categories', data]);
      return data;
    },
    async getList({ dispatch }, { body }) {
      body = await dispatch('jsonToBody', body, { root: true });
      const data = await PushAPI.list(body);
      return data;
    },
    async read(_c, { body }) {
      const data = await PushAPI.read(body);
      return data;
    }
  }
}
