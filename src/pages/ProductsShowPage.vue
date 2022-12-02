<template>
  <q-page class="page-py">
    <div class="wrapper">
      <q-skeleton v-if="is('get product')" class="tw-w-full tw-mt-4" type="rect" height="60px" />
      <Toolbar v-else-if="item" class="tw-mb-5" :title="item.name" titleClass="tw-pl-9 tw-text-base tw-font-bold">
        <template #actions>
          <div class="tw-flex">
            <ButtonHint class="tw-mr-2" v-slot="{ showed, onChange }">
              <DialogHint :visible="showed" @update:visible="onChange">
                <div v-html="$store.getters['hints/productCard']"></div>
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

      <q-skeleton v-if="is('get product')" class="tw-w-full tw-mt-8" type="rect" height="500px" />
      <template v-else-if="item">
        <Carousel
          class="tw-rounded-[20px] tw-mb-4"
          v-model="slide"
          height="400px"
        >
          <CarouselSlide
            class="tw-p-0"
            :name="index"
            v-for="(src, index) in gallery"
            :key="src"
          >
            <q-img
              class="tw-w-full tw-h-full"
              fit="contain"
              :src="src"
            />
          </CarouselSlide>
        </Carousel>

        <ProductsOptions class="tw-mb-8" v-bind="options" />
        <ProductPrice
          class="tw-mb-8"
          v-bind="extractPriceTypes(item)"
        />
        <ProductPriceHistory v-if="item.prop6" :points="item.prop6" />
        <AppButton class="tw-mt-7" size="base--rounded" @click="order">Купить</AppButton>
      </template>
    </div>
  </q-page>
</template>

<script>
import ProductsOptions from 'components/ProductsOptions.vue';
import ProductPrice from 'components/ProductPrice.vue';
import ProductPriceHistory from 'components/ProductPriceHistory.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    id: {
      required: true,
      type: [String, Number]
    }
  },
  async created() {
    this.start('get product');
    this.item = await this.$store.dispatch('catalog/getOne', { id: this.id });
    this.end('get product');
  },
  data() {
    return {
      slide: 0,
      item: null
    }
  },
  computed: {
    ...mapGetters(['extractPriceTypes']),
    ...mapGetters('loaders', ['is']),
    options() {
      if(!this.item) return null;

      const format = (prop) => prop || '-';
      const { prop1, prop2, prop3, prop4, prop5 } = this.item;

      return {
        prop1: format(prop1),
        prop2: format(prop2),
        prop3: format(prop3),
        prop4: format(prop4),
        prop5: format(prop5)
      };
    },
    gallery() {
       if(!this.item) return null;
       const gl = this.item.gallery;
       const gallery = (gl && gl.length > 0) ? gl : [ this.item.img ];
       return gallery.map(
        img => img === null ? '/gold2.png' : this.$imgSrc(img.slice(1))
      );
    },
  },
  methods: {
    ...mapActions('loaders', ['start', 'end']),
    order() {
      this.$store.dispatch('cart/add', { id: this.item.id_tp });
      this.$store.commit('cart/toggle');
    }
  },
  components: {
    ProductsOptions,
    ProductPrice,
    ProductPriceHistory,
  }
}
</script>
