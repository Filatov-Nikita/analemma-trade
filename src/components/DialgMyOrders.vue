<template>
  <BModal :visible="visible" minHeight="80%" v-bind="$attrs">
    <div class="tw-mb-4 tw-px-4">
      <p class="tw-text-center tw-font-bold tw-mb-6">Мои заказы</p>
      <p class="tw-text-center" v-if="!isAuth">Авторизуйтесь для просмотра заказов</p>
      <template v-if="items && !is('get orders')">
        <p class="tw-text-center" v-if="items.length <= 0">У вас нет заказов</p>
        <div class="tw-space-y-4" v-else>
          <OrderItem v-for="item in items" :item="item" />
        </div>
      </template>
      <div class="tw-space-y-4" v-if="is('get orders')">
        <q-skeleton v-for="i in 3" :key="i" class="tw-w-full" type="rect" height="250px" />
      </div>
    </div>
  </BModal>
</template>

<script>
import OrderItem from './OrderItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    visible: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    ...mapGetters('orders', ['items']),
    ...mapGetters('loaders', ['is']),
    ...mapGetters('auth', ['isAuth']),
  },
  methods: {
    ...mapActions('loaders', ['start', 'end']),
    async show() {
      this.start('get orders');
      await this.$store.dispatch('orders/list');
      this.end('get orders');
    }
  },
  watch: {
    visible: {
      async handler(val) {
        if(!val || !this.isAuth) return;
        await this.show();
      },
      immediate: true
    }
  },
  components: {
    OrderItem,
  }
}
</script>

<style>

</style>
