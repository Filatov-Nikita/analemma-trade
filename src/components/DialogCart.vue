<template>
  <BModal>
    <div class="tw-px-4 tw-pb-4">
      <p class="tw-font-bold tw-text-center tw-mb-6">
        В корзине <span class="tw-text-primary tw-text-2xl">{{ $store.getters['cart/len'] }}</span> товара
      </p>
      <CartListItem />
      <AppButton
        :disabled="$store.getters['cart/len'] <= 0"
        class="tw-mt-6"
        size="base--rounded"
        @click="next"
      >
        Оформить заказ на <span class="tw-font-bold">0 ₽</span>
      </AppButton>
    </div>
  </BModal>
</template>

<script>
import CartListItem from 'components/CartListItem.vue';

export default {
  emits: ['next'],
  methods: {
    next() {
      this.$emit('next');
    }
  },
  components: {
    CartListItem
  }
}
</script>

<style>

</style>
