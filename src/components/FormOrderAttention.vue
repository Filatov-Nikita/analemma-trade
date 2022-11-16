<template>
  <div
    v-if="deliveryType?.value === '2'"
    class="tw-flex tw-items-center tw-mt-3"
  >
    <span class="tw-mr-3">
      <svg class="tw-w-[50px] tw-h-[50px]">
        <use xlink:href="/sprite.svg#attention"></use>
      </svg>
    </span>
    <span class="tw-font-light tw-text-sm">
      Для получения заказа при себе необходимо иметь паспорт
    </span>
  </div>
  <p
    v-else-if="deliveryType?.value === '3'"
    class="
      tw-text-center
      tw-font-light
      tw-text-sm
      tw-max-w-[220px]
      tw-mx-auto
      tw-mt-6
    "
  >
    После оформления заказа с Вами свяжется наш менеджер
  </p>
</template>

<script>
export default {
  props: {
    deliveryType: {
      default: undefined,
      type: Object
    }
  }
};
</script>

<style>
</style>
