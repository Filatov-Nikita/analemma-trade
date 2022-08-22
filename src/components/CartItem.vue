<template>
  <div class="card-secondary tw-pb-6 tw-px-4 tw-p-4">
    <div class="tw-flex">
      <q-img class="tw-w-[60px] tw-h-[60px] tw-shrink-0 tw-mr-3 tw-rounded-[10px]" v-bind="{ src: '/gold.png' }" />

      <div class="tw-grow">
        <div class="tw-flex tw-items-start tw-mb-3">
          <p class="tw-text-sm tw-font-light tw-mr-2">Сувенирный слиток золота 999°, 20г</p>
          <q-space />
          <button
            :class="{ 'tw-opacity-0': cantRemove }"
            @click="$store.dispatch('cart/remove', id)"
          >
            <svg class="tw-w-5 tw-h-5">
              <use xlink:href="/sprite.svg#del"></use>
            </svg>
          </button>
        </div>

        <div class=" tw-space-y-[7px]">
          <div class="tw-flex tw-items-center">
            <p class="tw-font-light tw-text-xs tw-mr-1">Клубная цена:</p>
            <p class="tw-font-bold tw-text-primary tw-mr-1">14 750₽</p>
            <ButtonHint class="tw-mr-2" v-slot="{ showed, onChange }">
              <DialogHint :visible="showed" @update:visible="onChange">
                <div v-html="$store.state.hints.weight"></div>
              </DialogHint>
            </ButtonHint>
          </div>

          <div class="tw-flex tw-items-center">
            <p class="tw-font-light tw-text-xs tw-mr-1">Обычная цена:</p>
            <p>14 750₽</p>
          </div>

          <div class="tw-flex tw-items-center" v-if="prices?.buyback">
            <p class="tw-font-light tw-text-xs tw-mr-1">Цена выкупа:</p>
            <p class="tw-font-bold tw-text-positive">{{ prices.buyback }}</p>
          </div>

          <div
            class="tw-flex tw-items-center disabled:tw-opacity-50"
            v-if="!hideActions"
          >
            <p class="tw-font-light tw-text-xs">Кол-во:</p>

            <div class="tw-flex tw-items-center btns">
              <button
                class="tw-p-2"
                :disabled="!canReduce || disabledActions"
                @click="$store.dispatch('cart/reduceItem', id)"
              >
                <svg
                  class="tw-w-4 tw-h-4 tw-stroke-black"
                  :class="[ canReduce ? 'tw-stroke-black' : 'tw-stroke-gray900' ]">
                  <use xlink:href="/sprite.svg#reduce"></use>
                </svg>
              </button>
              <span class=" tw-font-bold tw-text-lg">{{ count }}</span>
              <button
                class="tw-p-2"
                :disabled="disabledActions"
                @click="$store.dispatch('cart/incItem', id)"
              >
                <svg class="tw-w-4 tw-h-4 tw-stroke-black">
                  <use xlink:href="/sprite.svg#append"></use>
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: {},
    count: {},
    cantRemove: {
      default: false,
      type: Boolean
    },
    hideActions: {
      default: false,
      type: Boolean
    },
    prices: {},
    disabledActions: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    canReduce() {
      return this.count > 1;
    }
  }
}
</script>

<style scoped>
  .btns button:disabled {
    opacity: 0.3 !important;
  }
</style>
