<template>
  <div class="tw-border-b tw-border-b-[#D2D2D2] tw-flex">
    <button
      v-for="(tab, i) in tabs"
      :key="i"
      class="tw-px-3 tw-py-4 tw-text-center tw-translate-y-[1px] tw-border-b-[3px] tw-border-primary"
      :class="[
        tab?.value === modelValue ? 'tw-border-opacity-100' : 'tw-border-opacity-0',
        { 'tw-flex-grow':  fullWidth }
      ]"
      @click="onClick(tab?.value)"
    >
      <span class="tw-font-light">{{ tab?.label }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      default: '',
      type: String
    },
    tabs: {
      required: true,
      type: Object
    },
    fullWidth: {
      default: false,
      type: Boolean
    }
  },
  emits: ['update:modelValue'],
  methods: {
    onClick(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style>

</style>
