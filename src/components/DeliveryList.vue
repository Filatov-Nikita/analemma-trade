<template>
  <section class="tw-space-y-8">
    <div v-for="(item, i) in items" :key="i">
      <p class="tw-font-bold tw-mb-3">{{ item.name }}</p>
      <div class="tw-space-y-[10px]">
        <DeliveryItem
          v-for="point in item.points"
          :key="point.id"
          :id="point.id"
          :address="point.street"
          @choose="$emit('choose', point)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import DeliveryItem from './DeliveryItem.vue';

export default {
  props: {
    items: {}
  },
  emits: ['choose'],
  components: {
    DeliveryItem
  }
};
</script>

<style>
</style>
