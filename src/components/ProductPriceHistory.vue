<template>
  <div>
    <p class="tw-text-center tw-font-light tw-mb-2">История цены</p>
    <div class="tw-text-center">
      <button
        class="tw-inline-block"
        :class="{ 'tw-opacity-0': show }"
        @click="onClick"
      >
        <svg class="tw-fill-primary tw-w-4 tw-h-4 tw-rotate-90">
          <use xlink:href="/sprite.svg#arrow-right"></use>
        </svg>
      </button>
    </div>

    <template v-if="show">
      <div>
        <img class="tw-w-full" src="/price.png" alt="" />
      </div>

      <div class="tw-text-center">
        <button
          class="tw-inline-block"
          @click="onClick"
        >
          <svg class="tw-fill-primary tw-w-4 tw-h-4 -tw-rotate-90">
            <use xlink:href="/sprite.svg#arrow-right"></use>
          </svg>
        </button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClick() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
</style>
