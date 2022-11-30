import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import { jsonToBody, cleanPhone, profitFormat } from './helpers';
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
    getters: {
      extractPriceTypes(_state, getters) {
        return (item) => {
          return {
            priceClub: getters.extractPrice(item.price2, item.price2d1, item.price2d2),
            priceBuy: getters.extractPrice(item.price1, item.price1d1, item.price1d2),
            priceBuyback: getters.extractPrice(item.price3, item.price3d1, item.price3d2)
          }
        }
      },
      extractPrice() {
        const currency = { rub: '₽', usd: '$' };

        return (price, diff, perc, curName = null) => {
          diff = profitFormat(diff);
          perc = profitFormat(perc);

          if(curName) {
            diff = diff + currency[curName];
            price = price + currency[curName];
            perc = perc + '%'
          }

          return { diff, value: price, diffPerc: perc };
        }
      },
      cleanedPhone() {
        return (str) => cleanPhone(str);
      }
    },
    actions: {
      jsonToBody(_c, obj) {
        return jsonToBody(obj);
      },
    },
    modules: {
      auth: require('./auth').default,
      profile: require('./profile').default,
      cart: require('./cart').default,
      catalog: require('./catalog').default,
      quotes: require('./quotes').default,
      points: require('./points.js').default,
      orders: require('./orders.js').default,
      push: require('./push.js').default,
      hints: require('./hints.js').default,
      loaders: require('./loaders.js').default,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
