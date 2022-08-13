<template>
  <div v-if="currentTab === name" :key="name">
    <slot />
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  props: {
    name: {

    }
  },
  setup() {
    const currentTab = inject('currentTab');
    return {
      currentTab
    }
  }
}
</script>

<style>

</style>
