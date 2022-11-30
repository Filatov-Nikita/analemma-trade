<template>
  <q-footer class="tw-bg-white tw-pt-4 tw-px-6">
    <nav class="tw-flex tw-justify-between -tw-mx-2 safe-pb">
      <router-link
        v-for="link in navLinks"
        :key="link.label"
        custom
        :to="link.to"
        v-slot="{ href, navigate, isExactActive }"
      >
        <a
          class="tw-text-center tw-px-2"
          :href="href"
          @click="navigate"
        >
          <svg :class="[ isExactActive ? 'tw-fill-primary' : 'tw-fill-[#D5D5D5]', 'tw-w-5 tw-h-5 tw-mx-auto', 'tw-mb-1' ]">
            <use :xlink:href="`/sprite.svg#${link.icon}`"></use>
          </svg>
          <span :class="[ isExactActive ? 'tw-text-primary' : 'tw-text-gray900' ]">{{ link.label }}</span>
        </a>
      </router-link>
      <button type="button"
          class="tw-text-center tw-px-2"
          @click="open(cart.to)"
        >
          <svg :class="'tw-w-5 tw-h-5 tw-mx-auto tw-mb-1 tw-fill-[#D5D5D5]'">
            <use :xlink:href="`/sprite.svg#cart`"></use>
          </svg>
          <span :class="'tw-text-gray900'">{{ cart.label }}</span>
        </button>
    </nav>
  </q-footer>
</template>

<script>
import { Platform } from 'quasar';

const navLinks = [
  {
    icon: 'home',
    to: '/',
    label: 'Главная'
  },
  {
    icon: 'products',
    to: '/products',
    label: 'Слитки'
  },
  {
    icon: 'values',
    to: '/quotes',
    label: 'Котировки'
  },
]

export default {
  data() {
    return {
      navLinks,
      cart: {
        icon: 'cart',
        to: 'https://analemmatrade.ru/catalog/',
        label: 'Витрина'
      },
    }
  },
  methods: {
    open(href) {
      if(!Platform.is.cordova) return;
      cordova.InAppBrowser.open(href, '_blank', 'location=yes');
    }
  }
}
</script>

<style>

</style>
