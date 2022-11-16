<template>
  <q-page class="page-py">
    <div class="wrapper">
      <Toolbar class="tw-mb-6" title="Котировки" titleClass="tw-font-bold tw-text-base" />

      <q-skeleton v-if="is('get cats')" class="tw-w-full" type="rect" height="60px" />
      <Tabs v-else class="tw-mb-1" :tabs="categories" v-model="tab"/>

      <q-skeleton v-if="is('get products') || is('get cats')" class="tw-w-full tw-mt-8" type="rect" height="200px" />
      <QuoteList v-else-if="products" :items="products"/>
    </div>
  </q-page>
</template>

<script>
import QuoteList from 'components/QuoteList.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  async created() {
    this.start('get cats');
    this.categories ?? await this.getCategories();
    this.end('get cats');
    this.tab = this.categories[0]?.value || null;
  },
  data() {
    return {
      tab: null,
      products: null
    }
  },
  computed: {
    ...mapGetters('quotes', ['categories']),
    ...mapGetters('loaders', ['is']),
  },
  methods: {
    ...mapActions('quotes', ['getCategories', 'getQuotes']),
    ...mapActions('loaders', ['start', 'end']),
  },
  watch: {
    async tab(id) {
      this.start('get products');
      this.products = await this.getQuotes({ id });
      this.end('get products');
    },
  },
  components: {
    QuoteList
  }
}
</script>

<style>

</style>
