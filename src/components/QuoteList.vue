<template>
  <div>
    <ListItem class="tw-flex" v-for="(item, i) in items" :key="i">
      <QuoteLabel class="tw-mr-2" :label="item.label" :time="item.time" />
      <q-space />
      <QuotePrice :value="item.value" :diff="item.diff" :diffPerc="item.diffPerc" />
    </ListItem>
  </div>
</template>

<script>
import QuoteLabel from 'src/components/QuoteLabel.vue';
import ListItem from 'components/ListItem.vue';

export default {
  props: {
    items: {

    }
  },
  components: {
    QuoteLabel,
    ListItem
  }
}
</script>

<style>

</style>
