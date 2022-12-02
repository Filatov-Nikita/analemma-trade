import * as ProfileAPI from 'src/api/profile';

export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    user(state) {
      return state.user;
    },
    address(state) {
      if(state.user === null) return null;
      const address = state.user?.address || '';
      const trim = s => typeof s === 'string' ? s.trim() : '';
      const [street = '', house = '', flat = ''] = address.split(',').map(trim);
      return { street, house, flat }
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async show({ commit }) {
      const data = await ProfileAPI.show();

      if(data.email.indexOf('@analemmatrade.ru') !== -1) {
        data.email = '';
      }

      commit('setUser', data);
      return data;
    },
    async update({ commit, getters, dispatch }, { body }) {
      const formdata = await dispatch('jsonToBody', body, { root: true });
      await ProfileAPI.update(formdata);
      commit('setUser', { ...getters.user, ...body });
      return getters.user;
    }
  }
}
