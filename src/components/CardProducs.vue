<template>
  <CardRoot
    labelClass="tw-px-6 tw-py-4"
    :to="{ name: 'products' }"
    label="Инвестиционное золото"
  >
    <div class="tw-px-4 tw-divide-y tw-divide-[#EAEAEA]">
      <ProductItem
        src="/gold.png"
        name="Сувенирный слиток золота 999°, 20г"
        :priceClub="{ value: '14 750₽', diff: '-12,50', diffPerc: '-0,69%' }"
        :priceBuy="{ value: '14 750₽', diff: '-12,50', diffPerc: '-0,69%' }"
        :priceBuyback="{ value: '14 750₽', diff: '-12,50', diffPerc: '-0,69%' }"
      />
      <ProductItem
        src="/gold.png"
        name="Сувенирный слиток золота 100, 20г"
        :priceClub="{ value: '14 750₽', diff: '-12,50', diffPerc: '-0,69%' }"
        :priceBuy="{ value: '14 750₽', diff: '-12,50', diffPerc: '-0,69%' }"
        :priceBuyback="{ value: '14 750₽', diff: '-12,50', diffPerc: '-0,69%' }"
      />
    </div>
  </CardRoot>
</template>

<script>
import CardRoot from 'components/CardRoot.vue';

export default {
  components: {
    CardRoot,
  },
};
</script>

<style>
</style>
