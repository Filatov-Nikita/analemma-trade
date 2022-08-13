<template>
  <component
    class="tw-py-4 tw-px-5 tw-flex tw-items-center"
    :is="custom ? 'div' : 'router-link'"
    v-bind="wrapperProps"
  >
    <span class="tw-mr-5">
      <svg class="tw-fill-primary tw-w-5 tw-h-5">
        <use :xlink:href="`/sprite.svg#${icon}`"></use>
      </svg>
    </span>

    <span class="tw-text-dark tw-text-sm">{{ label }}</span>

    <q-space />

    <span>
      <svg class="tw-w-3 tw-h-3 tw-fill-[#A8A7AF]">
        <use xlink:href="/sprite.svg#arrow-right"></use>
      </svg>
    </span>
  </component>
</template>

<script>
export default {
  props: {
    icon: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    to: {
      default: undefined,
      type: [String, Object]
    },
    custom: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    wrapperProps() {
      return this.custom ? {} : { to: this.to || '/' };
    }
  }
};
</script>

<style>
</style>
