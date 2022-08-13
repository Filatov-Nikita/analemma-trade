<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { provide, toRef } from 'vue';

export default {
  props: {
    modelValue: {}
  },
  setup(props) {
    provide('currentTab', toRef(props, 'modelValue'));
  }
}
</script>

<style>

</style>
