<template>
  <div class="tw-h-[67vh] tw-relative" >
    <yandex-map
      class="tw-absolute tw-inset-0 tw-z-0"
      :controls="[]"
      :coords="items[0].coords"
      zoom="10"
    >
      <ymap-marker
        v-for="item in items"
        :key="item.id"
        :icon="$yMarker"
        :marker-id="item.id"
        :coords="item.coords"
        @click="selectPoint(item)"
      />
    </yandex-map>
    <div class=" tw-absolute tw-bottom-10 tw-z-10 tw-inset-x-0">
      <AppButton
        size="base--rounded"
        class=" tw-max-w-[260px] tw-mx-auto tw-block"
        :disabled="!selectedPoint"
        @click="onChoose"
      >
        Заберу отсюда
      </AppButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {}
  },
  data() {
    return {
      selectedPoint: null
    }
  },
  emits: ['choose'],
  methods: {
    onChoose() {
      this.$emit('choose', this.selectedPoint)
    },
    selectPoint(point) {
      this.selectedPoint = point;
    },
  }
}
</script>

<style>

</style>
