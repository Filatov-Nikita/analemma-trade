import * as Tokens from 'src/api/utilities/tokens';
import * as AuthAPI  from 'src/api/auth';
import { update } from 'src/api/fcm';

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
      const res = await AuthAPI.getToken(body);
      if(!res.token) {
        const err = new Error('invalid code');
        err.invalidCode = true;
        throw err;
      }
      Tokens.setTokensData(res.token);
      await dispatch('profile/show', null, { root: true });
      await update();
      return res.token;
    },
    async logout({ commit }) {
      Tokens.cleanTokensData();
      commit('profile/setUser', null, { root: true });
      return true;
    }
  }
}
