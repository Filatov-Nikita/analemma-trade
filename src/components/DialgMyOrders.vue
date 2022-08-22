<template>
  <BModal minHeight="80%">
    <div class="tw-mb-24 tw-px-4">
      <OrderItem />
    </div>
  </BModal>
</template>

<script>
import OrderItem from './OrderItem.vue';

export default {
  components: {
    OrderItem,
  }
}
</script>

<style>

</style>
