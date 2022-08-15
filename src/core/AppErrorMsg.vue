<template>
  <div class="tw-flex tw-items-center tw-absolute tw-bottom-1">
    <span class="tw-mr-1">
      <svg class="tw-w-3 tw-h-3">
        <use xlink:href="/sprite.svg#warn"></use>
      </svg>
    </span>
    <span class="tw-text-negative tw-text-[10px] tw-leading-none">
      <slot />
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
