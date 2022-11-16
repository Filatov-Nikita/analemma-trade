<template>
  <Sheet class="b-modal b-modal--down" :slideIcon="slideIcon">
    <div class="tw-p-4 tw-pb-12 hint-body tw-flex tw-relative">
      <span class="tw-mr-4 tw-shrink-0">
        <svg class="tw-w-10 tw-h-10 ">
          <use xlink:href="/sprite.svg#help"></use>
        </svg>
      </span>
      <slot />
      <q-inner-loading :showing="$store.getters['loaders/is']('get hints')" />
    </div>
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
  .hint-body p + p {
    margin-top: 16px;
  }

  .hint-body > div {
    flex-grow: 1;
  }
</style>
