<template>
  <div class="tw-flex tw-items-center">
    <div class="tw-mr-1">
      <p class="tw-mb-[2px]">{{ value }}</p>
      <p class="tw-text-xs tw-text-negative">{{ diff }}</p>
    </div>
    <div class="tw-bg-negative tw-rounded-md tw-text-[10px] tw-font-semibold tw-leading-none tw-py-2 tw-px-3 tw-text-white">
      {{ diffPerc }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    diff: {},
    diffPerc: {}
  }
}
</script>

<style>

</style>
