<template>
  <router-link class="tw-flex tw-py-5" :to="{ name: 'products.show', params: { id } }">
    <q-img
      class="tw-w-[100px] tw-h-[100px] tw-shadow-2xl tw-rounded-xl tw-shrink-0 tw-mr-5"
      fit="contain"
      v-bind="{ src }"
    />
    <div class="tw-grow">
      <p class="tw-text-sm tw-font-light tw-max-w-[170px] tw-mb-5">{{ name }}</p>

      <div class="tw-space-y-4">
        <div class="tw-flex">
          <p class="tw-max-w-[50px] tw-text-[#757575] tw-text-xs tw-leading-tight tw-mr-2">
            Клубная цена:
          </p>
          <q-space />
          <QuotePrice v-bind="priceClub" />
        </div>
        <div class="tw-flex">
          <p class="tw-max-w-[50px] tw-text-[#757575] tw-text-xs tw-leading-tight tw-mr-2">
            Цена покупки:
          </p>
          <q-space />
          <QuotePrice v-bind="priceBuy" />
        </div>
        <div class="tw-flex">
          <p class="tw-max-w-[50px] tw-text-[#757575] tw-text-xs tw-leading-tight tw-mr-2">
            Цена выкупа:
          </p>
          <q-space />
          <QuotePrice v-bind="priceBuyback" />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: [String, Number]
    },
    src: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    priceClub: {
      required: true,
      type: Object
    },
    priceBuy: {
      required: true,
      type: Object
    },
    priceBuyback: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

</style>
