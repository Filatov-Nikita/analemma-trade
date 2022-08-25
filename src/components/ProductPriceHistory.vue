<template>
  <div>
    <p class="tw-text-center tw-font-light tw-mb-2">История цены</p>
    <div class="tw-text-center">
      <button
        :disabled="show"
        class="tw-inline-block tw-p-2"
        :class="{ 'tw-invisible': show }"
        @click="onClick"
      >
        <svg class="tw-fill-primary tw-w-4 tw-h-4 tw-rotate-90">
          <use xlink:href="/sprite.svg#arrow-right"></use>
        </svg>
      </button>
    </div>

    <template v-if="show">
     <ChartLine ref="chart" />

      <div class="tw-text-center">
        <button
          class="tw-inline-block tw-p-2"
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
import ChartLine from './ChartLine.vue';
import { nextTick } from 'vue';

export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClick() {
      this.show = !this.show;

      if(this.show) {
        nextTick(() => {
          this.$refs.chart.$el.scrollIntoView({ behavior: 'smooth' });
        })
      }
    },
  },
  components: {
    ChartLine
  }
};
</script>

<style>
</style>
