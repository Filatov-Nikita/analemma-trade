<template>
  <div>
    <p class="tw-py-4 tw-text-center" v-if="items.length <= 0">Товара нет в наличии</p>
    <template v-else>
      <ProductItem
        class="tw-border-b tw-border-b-[#EAEAEA]"
        v-for="item in items"
        :key="item.id"
        v-bind="{
          id: item.id,
          name: item.name,
          src: $imgSrc(item.img, '/gold.png'),
          ...extractPriceTypes(item)
        }"
      />
  </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  computed: {
    ...mapGetters(['extractPriceTypes'])
  }
};
</script>

<style>
</style>
