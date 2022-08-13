<template>
  <q-page class="page-py">
    <div class="wrapper">
      <ToolbarHome class="tw-mb-5" />

      <CardRoot class="tw-mb-5" labelClass="tw-px-6 tw-py-4" to="/" label="Инвестиционное золото">
        1
      </CardRoot>

      <CardQuote />

      <div>
        <TitleGold999 class="tw-mb-4" />
        <img src="~assets/images/graph.jpg" alt="">
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ToolbarHome from 'components/ToolbarHome.vue';
import CardRoot from 'components/CardRoot.vue';
import TitleGold999 from 'components/TitleGold999.vue';
import CardQuote from 'components/CardQuote.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    ToolbarHome,
    CardRoot,
    CardQuote,
    TitleGold999,
  }
})
</script>
