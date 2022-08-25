<template>
  <q-page class="page-py">
    <div class="wrapper">
      <Toolbar class="tw-mb-5" title="Сувенирный слиток" titleClass="tw-pl-9 tw-text-base tw-font-bold">
        <template #actions>
          <div class="tw-flex">
            <ButtonHint class="tw-mr-2" v-slot="{ showed, onChange }">
              <DialogHint :visible="showed" @update:visible="onChange">
                <div v-html="$store.state.hints.weight"></div>
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

      <Carousel
        class="tw-rounded-[20px]"
        v-model="slide"
        height="360px"
      >
        <CarouselSlide class="tw-p-0" name="1">
          <q-img src="/gold2.png" class="tw-w-full" height="320px"/>
        </CarouselSlide>
        <CarouselSlide name="2">
          <q-img src="/gold.png" class="tw-w-full" height="320px"/>
        </CarouselSlide>
      </Carousel>

      <ProductsOptions class="tw-mb-8" />
      <ProductPrice class="tw-mb-8" />
      <ProductPriceHistory />
      <AppButton class="tw-mt-7" size="base--rounded" @click="order">Купить</AppButton>
    </div>
  </q-page>
</template>

<script>
import ProductsOptions from 'components/ProductsOptions.vue';
import ProductPrice from 'components/ProductPrice.vue';
import ProductPriceHistory from 'components/ProductPriceHistory.vue';

export default {
  data() {
    return {
      slide: '1',
    }
  },
  methods: {
    order() {
      this.$store.dispatch('cart/add', { id: 1 });
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
