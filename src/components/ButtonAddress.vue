<template>
  <div class="tw-pb-5 tw-relative">
    <button
      type="button"
      class="card-secondary tw-px-5 tw-py-6 tw-items-center tw-flex tw-w-full active:tw-opacity-80 tw-border"
      :class="[ errorMessage ? 'tw-border-negative' : 'tw-border-[#F5F5FA]']"
    >
      <span class="tw-mr-3 tw-text-sm">{{ point?.address || 'Выберите адрес '}}</span>
      <q-space />
      <span>
        <svg class="tw-fill-[#A8A7AF] tw-w-2 tw-h-2">
          <use xlink:href="/sprite.svg#arrow-right"></use>
        </svg>
      </span>
    </button>
    <AppErrorMsg v-if="errorMessage">{{ errorMessage }}</AppErrorMsg>
  </div>
</template>

<script>
export default {
  props: {
    point: {
      default: undefined,
      type: Object
    },
    errorMessage: {
      default: undefined,
      type: String
    }
  }
};
</script>

<style>
</style>
