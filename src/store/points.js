import * as PointsAPI from 'src/api/points';

export default {
  namespaced: true,
  state: {
    items: null,
  },
  getters: {
    items(state) {
      if(!state.items) return null;
      return state.items.map(
        item => ({
          ...item,
          geo: item.geo.split(',').map(item => +item)
        })
      );
    }
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    async list({ commit }) {
      const data = await PointsAPI.list();
      commit('setItems', data);
      return data;
    }
  }
}
