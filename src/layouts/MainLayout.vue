<template>
  <q-layout :class="[bgColor]" view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <LayoutFooter />
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import LayoutFooter from 'components/LayoutFooter.vue';

export default defineComponent({
  name: 'MainLayout',
  computed: {
    bgColor() {
      return this.$route.meta?.bgColorClass || 'tw-bg-gray800'
    }
  },
  components: {
    LayoutFooter
  },
})
</script>
