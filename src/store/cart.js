export default {
  namespaced: true,
  state: {
    items: null
  },
  getters: {
    items(state) {
      return state.items;
    },
    len(state) {
      return state.items ? Object.keys(state.items).length : 0;
    }
  },
  mutations: {
    appendItem(state, item) {
      state.items = { ...(state.items || {}), [item.id]: item };
    },
    removeItem(state, itemId) {
      if(itemId in state.items) delete state.items[itemId];
    }
  },
  actions: {
    add({ commit }, item) {
      const cartItem = { ...item, count: 1 };
      commit('appendItem', cartItem);
    },
    remove({ commit }, itemId) {
      commit('removeItem', itemId);
    },
    incItem({ commit, getters }, itemId) {
      const item = getters.items[itemId];
      const cartItem = { ...item, count: item.count + 1}
      commit('appendItem', cartItem);
    },
    reduceItem({ commit, getters }, itemId) {
      const item = getters.items[itemId];
      const cartItem = { ...item, count: Math.max(1, item.count - 1) }
      commit('appendItem', cartItem);
    }
  }
}
