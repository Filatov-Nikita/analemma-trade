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
     <ChartLine ref="chart" v-bind="{ values, periods }" />

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
  props: {
    points: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    values() {
      return this.points.map(point => +point.match(/[0-9]+$/g)[0]);
    },
    periods() {
      return this.points.map(point => point.match(/^\d{2}\.\d{2}/g)[0])
    }
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
