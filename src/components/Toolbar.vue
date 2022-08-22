<template>
  <div class="safe-pt tw-flex tw-items-center">
    <button class="tw-p-2" @click="$router.back()">
      <span>
        <svg class="tw-rotate-180 tw-w-4 tw-h-4">
          <use xlink:href="/sprite.svg#arrow-right"></use>
        </svg>
      </span>
    </button>

    <q-space />

    <h1 v-if="title" :class="[titleClass]">{{ title }}</h1>

    <q-space />

    <slot name="actions" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: undefined,
      type: String
    },
    titleClass: {
      default: 'tw-font-normal tw-text-base'
    }
  }
}
</script>

<style>

</style>
