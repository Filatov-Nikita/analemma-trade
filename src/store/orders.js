import * as OrdersAPI from 'src/api/orders';

export default {
  namespaced: true,
  state: {
    items: null
  },
  getters: {
    items(state) {
      return state.items;
    }
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    async list({ commit }) {
      const data = await OrdersAPI.list();
      // const test = getItems();
      commit('setItems', data);
      return data;
    },
    async create(_c, body) {
      await OrdersAPI.create(body);
      return true;
    },
    async sell({ dispatch }, json) {
      const body = await dispatch('jsonToBody', json, { root: true });
      await OrdersAPI.sellProduct(body);
      return true;
    }
  },
}

function getItems() {
  return [
    {
      "name": "Сувенирный слиток золота 20гр.",
      "id": "11675",
      "img": "/upload/iblock/2e6/dfsd8x6ykbxpv5lhzvcb4gdakejio487.png",
      "price1": "2000.00",
      "price2": "1500.00",
      "price3": "980",
      "order_id": "79",
      "order_date": {
        "date": "2022-11-14 20:16:07.000000",
        "timezone_type": 3,
        "timezone": "Asia/Yekaterinburg"
      },
      "kol": "2.0000",
      "summ": "2000.0000",
      "status": "Принят, ожидается оплата"
    },
    {
      "name": "Сувенирный слиток золота 20гр.",
      "id": "11676",
      "img": "/upload/iblock/2e6/dfsd8x6ykbxpv5lhzvcb4gdakejio487.png",
      "price1": "3000.00",
      "price2": "2500.00",
      "price3": "980",
      "order_id": "79",
      "order_date": {
        "date": "2022-11-14 20:16:07.000000",
        "timezone_type": 3,
        "timezone": "Asia/Yekaterinburg"
      },
      "kol": "1.0000",
      "summ": "3000.0000",
      "status": "Принят, ожидается оплата"
    },
    {
      "name": "Сувенирный слиток золота 20гр.",
      "id": "11675",
      "img": "/upload/iblock/2e6/dfsd8x6ykbxpv5lhzvcb4gdakejio487.png",
      "price1": "2000.00",
      "price2": "1500.00",
      "price3": "980",
      "order_id": "78",
      "order_date": {
        "date": "2022-11-14 20:09:02.000000",
        "timezone_type": 3,
        "timezone": "Asia/Yekaterinburg"
      },
      "kol": "1.0000",
      "summ": "2000.0000",
      "status": "Принят, ожидается оплата"
    },
    {
      "name": "Сувенирный слиток золота 20гр.",
      "id": "11676",
      "img": "/upload/iblock/2e6/dfsd8x6ykbxpv5lhzvcb4gdakejio487.png",
      "price1": "3000.00",
      "price2": "2500.00",
      "price3": "980",
      "order_id": "78",
      "order_date": {
        "date": "2022-11-14 20:09:02.000000",
        "timezone_type": 3,
        "timezone": "Asia/Yekaterinburg"
      },
      "kol": "1.0000",
      "summ": "3000.0000",
      "status": "Принят, ожидается оплата"
    }
  ]
}
