import * as OrdersAPI from 'src/api/orders';
import { Platform } from 'quasar';

export default {
  namespaced: true,
  state: {
    items: null,
    paymentUrl: null
  },
  getters: {
    items(state) {
      return state.items;
    },
    paymentUrl(state) {
      return state.paymentUrl;
    }
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setPaymentUrl(state, payload) {
      console.log(payload);
      state.paymentUrl = payload || null;
    }
  },
  actions: {
    async list({ commit }) {
      const data = await OrdersAPI.list();
      commit('setItems', data);
      return data;
    },
    async create({ commit }, body) {
      const data = await OrdersAPI.create(body);
      const url = data[0]?.payment_url
      commit('setPaymentUrl', url);
      return data;
    },
    async sell({ dispatch }, json) {
      const body = await dispatch('jsonToBody', json, { root: true });
      await OrdersAPI.sellProduct(body);
      return true;
    },
    async pay(_c, { paymentUrl }) {
      if(!Platform.is.cordova) return;
      console.log(paymentUrl);
      cordova.InAppBrowser.open(paymentUrl, '_blank');
    }
  },
}
