<template>
  <CardRoot
    class="tw-mb-6 tw-px-2 tw-pb-2"
    :to="{ name: 'quotes' }"
    label="Котировки"
  >
    <div class="card-secondary tw-px-5 tw-py-4 tw-flex tw-mb-3">
      <QuoteLabel class="tw-mr-2" label="Золото 999" time="14:14:45" />
      <q-space />
      <QuotePrice value="1,795$" diff="-12,50" diffPerc="-0,69%" />
    </div>
    <div class="card-secondary tw-px-5 tw-py-4 tw-flex tw-mb-3">
      <QuoteLabel class="tw-mr-2" label="Серебро 999" time="14:14:45" />
      <q-space />
      <QuotePrice value="1,795$" diff="-12,50" diffPerc="-0,69%" />
    </div>
  </CardRoot>
</template>

<script>
import CardRoot from 'components/CardRoot.vue';

export default {
  components: {
    CardRoot
  }
};
</script>

<style>
</style>
