import * as Tokens from 'src/api/utilities/tokens';
import * as AuthAPI  from 'src/api/auth';

export default {
  namespaced: true,
  getters: {
    isAuth(_state, _getters, _rootState, rootGetters) {
      return rootGetters['profile/user'] !== null;
    }
  },
  actions: {
    async login({ dispatch }, { phone }) {
      const body = await dispatch('jsonToBody', { phone }, { root: true });
      await AuthAPI.login(body);
      return true;
    },
    async getToken({ dispatch }, { phone, kod }) {
      const body = await dispatch(
        'jsonToBody',
        { phone, kod },
        { root: true }
      );
      const { token } = await AuthAPI.getToken(body);
      Tokens.setTokensData(token);
      await dispatch('profile/show', null, { root: true });
      return token;
    },
    async logout({ commit }) {
      Tokens.cleanTokensData();
      commit('profile/setUser', null, { root: true });
      return true;
    }
  }
}
