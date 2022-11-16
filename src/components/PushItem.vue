<template>
  <div
    class="tw-bg-secondary tw-rounded-2xl tw-border tw-p-4"
    :class="[ read ? 'tw-border-secondary' : 'tw-border-primary' ]"
  >
    <p class="tw-text-base tw-font-medium tw-mb-1">{{ header }}</p>
    <p class="tw-text-[#565656] tw-font-light">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    read: {
      default: true,
      type: Boolean
    }
  }
}
</script>

<style>

</style>
