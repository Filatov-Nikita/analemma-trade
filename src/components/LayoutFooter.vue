<template>
  <q-footer class="tw-bg-white tw-py-4 tw-px-6">
    <nav class="tw-flex tw-justify-between -tw-mx-2">
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
    </nav>
  </q-footer>
</template>

<script>
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
  {
    icon: 'cart',
    to: '/3',
    label: 'Витрина'
  },
]

export default {
  data() {
    return {
      navLinks
    }
  }
}
</script>

<style>

</style>
