<template>
  <div>
    <ProductItem
      v-for="i in 3"
      :key="i"
      class="tw-border-b tw-border-b-[#EAEAEA]"
      src="/gold.png"
      name="Сувенирный слиток золота 999°, 20г"
      :priceClub="{
        value: '14 750₽',
        diff: '-12,50',
        diffPerc: '-0,69%',
      }"
      :priceBuy="{
        value: '14 750₽',
        diff: '-12,50',
        diffPerc: '-0,69%',
      }"
      :priceBuyback="{
        value: '14 750₽',
        diff: '-12,50',
        diffPerc: '-0,69%',
      }"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
