<template>
  <q-page class="page-py">
    <div class="wrapper">
      <Toolbar class="tw-mb-6" title="Котировки" titleClass="tw-font-bold tw-text-base" />

      <Tabs class="tw-mb-1" :tabs="tabs" v-model="tab"/>

      <TabsContent v-model="tab">
        <TabsContentItem name="metal">
          <QuoteList :items="[ { label: 'Золото 999', time: '14:14:45', value: '1,795', diff: '-12,50', diffPerc: '-0,69%' } ]"/>
        </TabsContentItem>
        <TabsContentItem name="money">
          <QuoteList :items="[ { label: 'Доллар', time: '14:14:45', value: '1,795', diff: '-12,50', diffPerc: '-0,69%' } ]"/>
        </TabsContentItem>
      </TabsContent>
    </div>
  </q-page>
</template>

<script>
import QuoteList from 'components/QuoteList.vue';

export default {
  data() {
    return {
      tabs: [
        {
          label: 'Металлы',
          value: 'metal'
        },
        {
          label: 'Валюты',
          value: 'money'
        },
      ],
      tab: 'metal'
    }
  },
  components: {
    QuoteList
  }
}
</script>

<style>

</style>
