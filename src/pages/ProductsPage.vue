<template>
  <q-page class="page-py">
    <div class="wrapper">
      <Toolbar title="Слитки" titleClass="tw-pl-9 tw-text-base tw-font-bold">
        <template #actions>
          <div class="tw-flex">
            <ButtonHint class="tw-mr-2" v-slot="{ showed, onChange }">
              <DialogHint :visible="showed" @update:visible="onChange">
                <div v-html="$store.getters['hints/products']"></div>
              </DialogHint>
            </ButtonHint>
            <button @click="$store.commit('cart/toggle')">
              <svg class="tw-w-5 tw-h-5">
                <use xlink:href="/sprite.svg#cart2"></use>
              </svg>
            </button>
          </div>
        </template>
      </Toolbar>

      <q-skeleton v-if="is('get cats')" class="tw-w-full" type="rect" height="60px" />
      <Tabs v-else-if="categories" :tabs="categories" v-model="tab" />

      <q-skeleton v-if="is('get products') || is('get cats')" class="tw-w-full tw-mt-4" type="rect" height="250px" />
      <ProductsList v-else-if="products" :items="products" />
    </div>
  </q-page>
</template>

<script>
import ProductsList from 'components/ProductsList.vue';
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
    };
  },
  computed: {
    ...mapGetters('catalog', ['categories']),
    ...mapGetters('loaders', ['is']),
  },
  methods: {
    ...mapActions('catalog', ['getCategories', 'getCatalog']),
    ...mapActions('loaders', ['start', 'end']),
  },
  watch: {
    async tab(id) {
      this.start('get products');
      this.products = await this.getCatalog({ id });
      this.end('get products');
    },
  },
  components: {
    ProductsList,
  }
};
</script>

<style>
</style>
