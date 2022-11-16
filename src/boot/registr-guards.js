import Service from 'src/api/utilities/service';
import { getAccessToken } from 'src/api/utilities/tokens';
import { Loading, Notify } from 'quasar';

export default ({ router, store }) => {
  Service.registrHandleRejectionToken(handler);

  (async () => {
    if(store.getters['hints/items'] === null) {
      await store.dispatch('hints/list');
    }
  })()

  async function handler() {
    await store.dispatch('auth/logout');
    router.replace({ name: 'login' });
  }

  router.beforeEach(async (to, from, next) => {
    const isAuth = store.getters['auth/isAuth'];
    const token = getAccessToken();
    if(isAuth) next();
    else if(token) {
      try {
        Loading.show();
        await store.dispatch('profile/show');
      } catch(e) {
        throw e;
      } finally {
        Loading.hide();
        next();
      }
    }
    else if(to.meta?.auth === true) next({ name: 'login' });
    else next();
  });

  router.beforeEach(async () => {
    if(store.getters['cart/items'] === null) {
      let cart = window.localStorage.getItem('cart');
      if(cart) {
        try {
          cart = JSON.parse(cart);
          const valid = Object.values(cart).every(val => val.id && val.count);
          if(!valid) throw 'невалидная схема объекта';
          store.commit('cart/setItems', cart);
          store
          .dispatch('cart/show')
          .catch( e => Notify.create({ type: 'negative', message: 'Не удалось загрузить данные корзины' }) )
        } catch(e) {
          store.dispatch('cart/clear');
        }
      }
    }
  });
}
