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

        const formatter = {
          diff: (diff, curName = null) => {
            if(diff !== null && diff !== '-') {
              diff = profitFormat(diff)
              if(curName) diff = diff + currency[curName];
              return diff;
            }

            return '-';
          },
          perc: (perc, curName = null) => {
            if(perc !== null && perc !== '-') {
              perc = profitFormat(perc)
              if(curName) perc = perc + '%';
              return perc;
            }

            return '-';
          },
          price: (price, curName = null) => {
            if(price !== null && price !== '-') {
              if(curName) price = price + currency[curName];
              return price;
            }

            return '-'
          }
        }

        return (price, diff, perc, curName = null) => {
          return {
            diff: formatter['diff'](diff, curName),
            value: formatter['price'](price, curName),
            diffPerc: formatter['perc'](perc, curName)
          };
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
