<template>
  <component
    class="tw-bg-primary tw-w-full tw-text-center tw-font-light tw-text-white disabled:tw-bg-opacity-50 active:tw-opacity-80 btn"
    :class="[ classes ]"
    :is="is"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    is: {
      default: 'button',
      type: String
    },
    size: {
      default: 'base',
      type: String
    },
  },
  computed: {
    classes() {
      switch(this.size) {
        case 'base--rounded': return 'tw-py-2.5 tw-px-4 tw-text-base tw-rounded-xl';
        case 'xl': return 'tw-py-6 tw-px-8 tw-text-sm tw-rounded-xl';
        default: return 'tw-py-2.5 tw-px-4 tw-text-base tw-rounded';
      }
    }
  }
}
</script>

<style scoped>
.btn:disabled {
  opacity: 1 !important;
}
</style>
