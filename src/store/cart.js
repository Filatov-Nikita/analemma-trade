import * as BasketAPI from 'src/api/basket';

export default {
  namespaced: true,
  state: {
    showed: false,
    items: null,
    products: null
  },
  getters: {
    items(state) {
      return state.items;
    },
    products(state) {
      return state.products;
    },
    len(state) {
      return state.items ? Object.keys(state.items).length : 0;
    },
    showed(state) {
      return state.showed;
    },
    totalCost(state, _getters, _rootState, rootGetters) {
      if(!state.products) return 0;
      const key = rootGetters['profile/user']?.opt === 1 ? 'price2' : 'price1';
      return state.products.reduce((acc, pr) => {
        const count = state.items?.[pr.id]?.count || 0;
        acc += +pr[key] * count;
        return acc;
      }, 0);
    }
  },
  mutations: {
    appendItem(state, item) {
      state.items = { ...(state.items || {}), [item.id]: item };
    },
    removeItem(state, itemId) {
      if(itemId in state.items) delete state.items[itemId];
    },
    toggle(state, value) {
      if(typeof value === 'boolean') return state.showed = value;
      return state.showed = !state.showed;
    },
    setItems(state, payload) {
      state.items = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    clear({ commit }) {
      commit('setItems', null);
      commit('setProducts', null);
      window.localStorage.removeItem('cart');
    },
    updateStorage({ getters }) {
      window.localStorage.setItem('cart', JSON.stringify(getters.items));
    },
    async add({ commit, dispatch, getters }, item) {
      item = getters.items?.[item.id] || item;
      const cartItem = { count: 1, ...item };
      commit('appendItem', cartItem);
      dispatch('updateStorage');
      await dispatch('show');
      return cartItem;
    },
    async remove({ commit, dispatch }, itemId) {
      commit('removeItem', itemId);
      dispatch('updateStorage');
      await dispatch('show');
      return true;
    },
    incItem({ commit, getters, dispatch }, itemId) {
      const item = getters.items[itemId];
      const cartItem = { ...item, count: item.count + 1}
      commit('appendItem', cartItem);
      dispatch('updateStorage');
    },
    reduceItem({ commit, getters, dispatch }, itemId) {
      const item = getters.items[itemId];
      const cartItem = { ...item, count: Math.max(1, item.count - 1) }
      commit('appendItem', cartItem);
      dispatch('updateStorage');
    },
    async show({ getters, commit, dispatch }) {
      dispatch('loaders/start', 'showing cart', { root: true});

      const ids = {};
      Object.values(getters.items || {}).forEach((item, index) => {
        ids[`goods[${index}]`] = item.id;
      });

      try {
        const data = await BasketAPI.show({ ids });
        commit('setProducts', data);
        return data;

      }
      catch(e) { throw e }
      finally {
        dispatch('loaders/end', 'showing cart', { root: true});
      }
    }
  }
}
