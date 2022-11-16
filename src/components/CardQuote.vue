<template>
  <CardRoot
    class="tw-mb-6 tw-px-2 tw-pb-2"
    :to="{ name: 'quotes' }"
    label="Котировки"
  >
    <q-skeleton v-if="is('fetching q')" class="tw-w-full" height="150px" type="rect" />
    <template v-else-if="items">
      <div
        class="card-secondary tw-px-5 tw-py-4 tw-flex tw-mb-3"
        v-for="item in items"
        :key="item.id"
      >
        <QuoteLabel class="tw-mr-2" :label="item.name" :time="item.date" />
        <q-space />
        <QuotePrice v-bind="extractPrice(item.price, item.dyn1, item.dyn2)" />
      </div>
    </template>
  </CardRoot>
</template>

<script>
import CardRoot from 'components/CardRoot.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  async created() {
    this.start('fetching q');
    this.items = await this.getQuotes({ id: 41 });
    this.end('fetching q');
  },
  data() {
    return {
      items: null
    }
  },
  computed: {
    ...mapGetters(['extractPrice']),
    ...mapGetters('loaders', ['is']),
  },
  methods: {
    ...mapActions('quotes', ['getQuotes']),
    ...mapActions('loaders', ['start', 'end']),
  },
  components: {
    CardRoot
  }
};
</script>

<style>
</style>
