<template>
  <div class="tw-bg-white tw-rounded-3xl">
    <router-link
      class="tw-flex tw-items-center tw-justify-between"
      :class="[ labelClass ]"
      v-bind="{ to }"
    >
      <span class="tw-text-[#201F1D]">{{ label }}</span>
      <svg class="tw-w-3 tw-h-3"><use xlink:href="/sprite.svg#arrow-right"></use></svg>
    </router-link>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String
    },
    to: {
      required: true,
      type: [String, Object]
    },
    labelClass: {
      default: 'tw-px-4 tw-py-4'
    }
  }
}
</script>

<style>

</style>
