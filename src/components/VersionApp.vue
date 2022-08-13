<template>
  <p class="tw-text-center tw-text-[#6B6B6B] tw-text-sm">Версия приложения: {{ value }}</p>
</template>

<script>
export default {
  data() {
    return {
      value: require('../../package.json').version
    }
  }
}
</script>

<style>

</style>
