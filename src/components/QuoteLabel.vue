<template>
  <div>
    <p class="tw-mb-[2px]">{{ label }}</p>
    <p class="tw-font-light tw-text-xs tw-text-gray900">{{ time }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {},
    time: {}
  }
}
</script>

<style>

</style>
