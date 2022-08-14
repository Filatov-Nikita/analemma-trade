<template>
  <q-page class="page-py">
    <div class="wrapper">
      <ToolbarHome class="tw-mb-5" />
      <CardProducs class="tw-mb-5" />
      <CardQuote />
      <div>
        <TitleGold999 class="tw-mb-4" />
        <img src="~assets/images/graph.jpg" alt="" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ToolbarHome from 'components/ToolbarHome.vue';
import TitleGold999 from 'components/TitleGold999.vue';
import CardQuote from 'components/CardQuote.vue';
import CardProducs from 'components/CardProducs.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    ToolbarHome,
    CardQuote,
    CardProducs,
    TitleGold999,
  },
});
</script>
