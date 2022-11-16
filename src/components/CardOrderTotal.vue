<template>
  <div class="card-secondary tw-py-6 tw-px-4 tw-space-y-6">
    <div class="tw-flex">
      <p class=" tw-font-medium tw-text-sm tw-text-[#515151]">Всего товаров:</p>
      <q-space class="tw-border-b tw-border-b-[#C5C5C5] tw-mb-1 tw-mx-1" />
      <p class=" tw-font-medium tw-text-sm tw-text-[#515151]">{{ len }} {{ lenLabel }}</p>
    </div>

    <div class="tw-flex">
      <p class=" tw-font-medium tw-text-sm tw-text-[#515151]">Сумма заказа:</p>
      <q-space class="tw-border-b tw-border-b-[#C5C5C5] tw-mb-1 tw-mx-1" />
      <p class=" tw-font-medium tw-text-sm tw-text-[#515151]">{{ $price(totalCost) }}</p>
    </div>

    <div class="tw-flex">
      <p class=" tw-font-medium tw-text-sm tw-text-[#515151]">Итого к оплате:</p>
      <q-space class="tw-border-b tw-border-b-[#C5C5C5] tw-mb-1 tw-mx-1" />
      <p class=" tw-font-bold tw-text-xl tw-leading-none">{{ $price(totalCost) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    len: {
      required: true,
      type: Number
    },
    totalCost: {
      required: true,
      type: Number
    }
  },
  computed: {
    lenLabel() {
      return this.$numWord(this.len, ['товар', 'товара', 'товаров'])
    }
  },
}
</script>

<style>

</style>
