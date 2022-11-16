<template>
  <div class="tw-space-y-3">
    <div class="tw-flex">
      <div>
        <div class="tw-flex">
          <p class="tw-mb-[2px] tw-mr-1">Клубная цена:</p>
          <ButtonHint v-slot="{ showed, onChange }">
            <DialogHint :visible="showed" @update:visible="onChange">
              <div v-html="$store.getters['hints/club']"></div>
            </DialogHint>
          </ButtonHint>
        </div>
        <p class="tw-text-xs tw-font-light tw-text-gray900">{{ dt }}</p>
      </div>
      <q-space />
      <QuotePrice v-bind="priceClub" />
    </div>
    <div class="tw-flex">
      <div>
        <p class="tw-mb-[2px]">Цена покупки:</p>
        <p class="tw-text-xs tw-font-light tw-text-gray900">{{ dt }}</p>
      </div>
      <q-space />
      <QuotePrice v-bind="priceBuy" />
    </div>
    <div class="tw-flex">
      <div>
        <p class="tw-mb-[2px]">Цена выкупа:</p>
        <p class="tw-text-xs tw-font-light tw-text-gray900">{{ dt }}</p>
      </div>
      <q-space />
      <QuotePrice v-bind="priceBuyback" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  },
  data() {
    return {
      dt: this.$curDate()
    }
  }
};
</script>

<style>
</style>
