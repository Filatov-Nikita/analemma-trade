<template>
  <Sheet
    class="b-modal"
    max-height="80%"
    :slideIcon="slideIcon"
    v-slot="{ closeSelf }"
  >
    <button class="tw-absolute tw-top-3 tw-right-5" @click="closeSelf">
      <slot name="close">Закрыть</slot>
    </button>
    <slot />
  </Sheet>
</template>

<script>
import { Sheet } from 'bottom-sheet-vue3';
import { h } from 'vue';

export default {
  computed: {
    slideIcon() {
      return h('div', { class: 'slide-icon' });
    }
  },
  components: {
    Sheet
  }
};
</script>

<style>
</style>
