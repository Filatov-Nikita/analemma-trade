<template>
  <div class="tw-space-y-[10px]">
    <CartItem
      v-for="item in $store.getters['cart/items']"
      :key="item.id"
      v-bind="{ ...item, cantRemove }"
    />
  </div>
</template>

<script>
import CartItem from 'components/CartItem.vue';

export default {
  props: {
    cantRemove: {
      default: false,
      type: Boolean
    }
  },
  components: {
    CartItem
  }
};
</script>

<style>
</style>
