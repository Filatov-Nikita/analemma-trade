<template>
  <q-page class="page-py">
    <div class="wrapper">
      <Toolbar title="Слитки" titleClass="tw-pl-9 tw-text-base tw-font-bold">
        <template #actions>
          <div class="tw-flex">
            <button class="tw-mr-2">
              <svg class="tw-w-5 tw-h-5">
                <use xlink:href="/sprite.svg#help"></use>
              </svg>
            </button>
            <button>
              <svg class="tw-w-5 tw-h-5">
                <use xlink:href="/sprite.svg#cart2"></use>
              </svg>
            </button>
          </div>
        </template>
      </Toolbar>

      <Tabs :tabs="tabs" v-model="tab" />

      <TabsContent v-model="tab">
        <TabsContentItem name="gold">
          <ProductsList />
        </TabsContentItem>
        <TabsContentItem name="silver">
          <ProductsList />
        </TabsContentItem>
        <TabsContentItem name="chains">
          <ProductsList />
        </TabsContentItem>
      </TabsContent>
    </div>
  </q-page>
</template>

<script>
import ProductsList from 'components/ProductsList.vue';

export default {
  data() {
    return {
      tabs: [
        {
          label: 'Золото',
          value: 'gold'
        },
        {
          label: 'Серебро',
          value: 'silver'
        },
        {
          label: 'Цепи',
          value: 'chains'
        },
      ],
      tab: 'gold',
    };
  },
  components: {
    ProductsList
  }
};
</script>

<style>
</style>
