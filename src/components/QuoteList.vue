<template>
  <div>
    <ListItem class="tw-flex" v-for="item in items" :key="item.id">
      <QuoteLabel class="tw-mr-2" :label="item.name" :time="item.date" />
      <q-space />
      <QuotePrice v-bind="extractPrice(item.price, item.dyn1, item.dyn2)" />
    </ListItem>
  </div>
</template>

<script>
import QuoteLabel from 'src/components/QuoteLabel.vue';
import ListItem from 'components/ListItem.vue';
import { mapGetters } from 'vuex';

export default {
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  computed: {
    ...mapGetters(['extractPrice']),
  },
  components: {
    QuoteLabel,
    ListItem
  }
}
</script>

<style>

</style>
