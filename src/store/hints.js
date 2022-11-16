import api from 'src/api/utilities/service';

export default {
  namespaced: true,
  state: {
    items: null
  },
  getters: {
    items(state) {
      return state.items
    },
    products(state) {
      if(state.items === null) return '';
      return state.items[0]?.text || '';
    },
    productCard(state) {
      if(state.items === null) return '';
      return state.items[1]?.text || '';
    },
    club(state) {
      if(state.items === null) return '';
      return state.items[2]?.text || '';
    },
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    }
  },
  actions: {
    async list({ commit, dispatch }) {
      dispatch('loaders/start', 'get hints', { root: true });
      const data = await api.swot('helper.php').json();
      commit('setItems', data);
      dispatch('loaders/end', 'get hints', { root: true });
      return data;
    }
  }
}
