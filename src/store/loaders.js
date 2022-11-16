export default {
  namespaced: true,
  state: {
    loaders: []
  },
  getters: {
    is(state) {
      return (payload) => state.loaders.some(name => name === payload);
    }
  },
  mutations: {
    append(state, payload) {
      state.loaders.push(payload);
    },
    remove(state, payload) {
      state.loaders = state.loaders.filter(name => name !== payload);
    }
  },
  actions: {
    start({ commit }, name) {
      commit('append', name);
    },
    end({ commit }, name) {
      commit('remove', name);
    }
  }
}
