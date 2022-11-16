<template>
  <BModal :visible="visible" v-bind="$attrs">
    <div class="tw-px-4 tw-pb-4 tw-relative">
      <p class="tw-font-bold tw-text-center tw-mb-6">
        В корзине <span class="tw-text-primary tw-text-2xl">{{ $store.getters['cart/len'] }}</span> {{ lenLabel }}
      </p>
      <CartListItem v-if="products" :items="products" />
      <AppButton
        v-if="!isAuth"
        class="tw-mt-6"
        size="base--rounded"
        @click="login"
      >
        Войти чтобы продолжить
      </AppButton>
      <AppButton
        v-else
        :disabled="len <= 0"
        class="tw-mt-6"
        size="base--rounded"
        @click="next"
      >
        Оформить заказ на <span class="tw-font-bold">{{ $price(totalCost) }}</span>
      </AppButton>
      <q-inner-loading :showing="is('showing cart')"/>
    </div>
  </BModal>
</template>

<script>
import CartListItem from 'components/CartListItem.vue';
import { mapGetters } from 'vuex';

export default {
  props: {
    visible: {
      default: false,
      type: Boolean
    }
  },
  emits: ['next'],
  methods: {
    next() {
      this.$emit('next');
    },
    login() {
      this.$router.replace({ name: 'login' });
      this.$store.commit('cart/toggle', false);
    },
  },
  computed: {
    ...mapGetters('cart', ['products', 'len', 'totalCost', '']),
    ...mapGetters('loaders', ['is']),
    ...mapGetters('auth', ['isAuth']),
    lenLabel() {
      return this.$numWord(this.len, ['товар', 'товара', 'товаров'])
    }
  },
  components: {
    CartListItem
  },
}
</script>

<style>

</style>
