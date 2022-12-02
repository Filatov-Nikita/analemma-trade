<template>
  <CardRoot
    labelClass="tw-px-6 tw-py-4"
    :to="{ name: 'products' }"
    label="Инвестиционное золото"
  >
    <div class="tw-px-4 tw-divide-y tw-divide-[#EAEAEA]">
      <q-skeleton v-if="is('fetching')" class="tw-w-full" height="150px" type="rect" />
      <template v-else-if="items">
        <ProductItem
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :src="$imgSrc(item.img, '/gold.png')"
          :name="item.name"
          v-bind="extractPriceTypes(item)"
        />
      </template>
    </div>
  </CardRoot>
</template>

<script>
import CardRoot from 'components/CardRoot.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  async created() {
    this.start('fetching');
    this.items = await this.$store.dispatch('catalog/getCatalog', { id: 40 });
    this.end('fetching');
  },
  data() {
    return {
      items: null
    }
  },
  computed: {
    ...mapGetters(['extractPriceTypes']),
    ...mapGetters('loaders', ['is']),
  },
  methods: {
    ...mapActions('loaders', ['start', 'end'])
  },
  components: {
    CardRoot,
  },
};
</script>

<style>
</style>
