<template>
  <q-page class="page-py">
    <div class="wrapper">
      <Toolbar title="Слитки" titleClass="tw-pl-9 tw-text-base tw-font-bold">
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
    ProductsList,
  }
};
</script>

<style>
</style>
