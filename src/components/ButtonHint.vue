<template>
  <button @click="toggle">
    <svg class="tw-w-5 tw-h-5">
      <use xlink:href="/sprite.svg#help"></use>
    </svg>
    <slot v-bind="{ showed, onChange }"/>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showed: false
    }
  },
  methods: {
    toggle() {
      this.showed = !this.showed
    },
    close() {
      this.showed = false
    },
    onChange(value) {
      this.showed = value
    }
  }
};
</script>

<style>
</style>
