<template>
  <div class="tw-flex tw-items-center">
    <div class="tw-mr-1">
      <p class="tw-mb-[2px]">{{ price.value }}</p>
      <p
        class="tw-text-xs"
        :class="{
          'tw-text-negative': isNegative,
          'tw-text-positive': !isNegative
        }"
      >
        {{ price.diff }}
      </p>
    </div>
    <div
      class="tw-rounded-md tw-text-[10px] tw-font-semibold tw-leading-none tw-py-2 tw-px-3 tw-text-white"
      :class="{
        'tw-bg-negative': isNegative,
        'tw-bg-positive': !isNegative
      }"
    >
      {{ price.diffPerc }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String
    },
    diff: {
      required: true,
      type: String
    },
    diffPerc: {
      required: true,
      type: String
    },
    curName: {
      default: 'rub',
      type: String
    }
  },
  computed: {
    isNegative() {
      return parseFloat(this.diffPerc) < 0;
    },
    price() {
      return this.$store.getters.extractPrice(this.value, this.diff, this.diffPerc, this.curName);
    }
  }
}
</script>

<style>

</style>
