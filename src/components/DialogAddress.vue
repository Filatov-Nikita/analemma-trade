<template>
  <q-dialog position="bottom" class="dialog-bottom" :modelValue="modelValue" v-bind="$attrs">
    <div class="tw-mb-24 tw-px-4 tw-relative">
      <div class="card-primary tw-bg-white tw-p-[6px]">
        <p class="card-primary__title tw-pt-3 tw-px-4 tw-mb-3">Наши адреса:</p>
        <q-skeleton v-if="is('get points')" class="tw-w-full" height="80px" />
        <template v-else-if="items">
          <router-link
            v-for="point in items"
            :key="point.id"
            class="card-secondary tw-flex tw-items-center tw-py-6 tw-px-5 tw-mb-2 tw-text-sm"
            :to="{ name: 'address.show', params: { id: point.id } }"
            >
            <span class="tw-mr-2">{{ point.address }}</span>
            <q-space />
            <span>
              <svg class="tw-fill-[#A8A7AF] tw-w-[10px] tw-h-[10px]">
                <use xlink:href="/sprite.svg#arrow-right"></use>
              </svg>
            </span>
          </router-link>
        </template>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  inheritAttrs: false,
  props: {
    modelValue: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    ...mapGetters('points', ['items']),
    ...mapGetters('loaders', ['is'])
  },
  methods: {
    ...mapActions('points', ['list']),
    ...mapActions('loaders', ['start', 'end']),
  },
  watch: {
    async modelValue(val) {
      if(!val) return;
      this.start('get points');
      this.items ?? await this.list();
      this.end('get points');
    }
  }
};
</script>

<style>
</style>
