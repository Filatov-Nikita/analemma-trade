import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {
      address: {
        1: {
          name: 'г. Москва, ул. Краснодарская, д.48'
        },
        2: {
          name: 'г. Санкт-Петербург, пр-кт Каменноостровский, д. 40А, пом. 9-Н'
        }
      }
    },
    modules: {
      cart: require('./cart').default
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
