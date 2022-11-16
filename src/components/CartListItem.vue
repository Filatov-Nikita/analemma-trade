<template>
  <div class="tw-space-y-[10px]">
    <CartItem
      v-for="item in items"
      :key="item.id"
      v-bind="{ item, cantRemove }"
      :count="$store.getters['cart/items']?.[item.id]?.count || 0"
      @inc="$store.dispatch('cart/incItem', item.id)"
      @reduce="$store.dispatch('cart/reduceItem', item.id)"
    />
  </div>
</template>

<script>
import CartItem from 'components/CartItem.vue';

export default {
  props: {
    items: {
      required: true,
      type: Array
    },
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
