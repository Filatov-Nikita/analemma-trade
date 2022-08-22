<template>
  <div class="tw-flex tw-items-center tw-pb-4 safe-pt">
    <router-link :to="{ name: 'profile' }">
      <svg class="tw-w-5 tw-h-5"><use xlink:href="/sprite.svg#profile"></use></svg>
    </router-link>

    <q-space />

    <router-link to="/" class="tw-pl-9">
      <img class="tw-w-[136px]" src="~assets/images/logo.svg" alt="app logo">
    </router-link>

    <q-space />

    <router-link class="tw-mr-3" :to="{ name: 'push.settings' }">
      <svg class="tw-w-5 tw-h-5 tw-fill-gray900"><use xlink:href="/sprite.svg#alert"></use></svg>
    </router-link>
    <button @click="$store.commit('cart/toggle')">
      <svg class="tw-w-5 tw-h-5"><use xlink:href="/sprite.svg#cart2"></use></svg>
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
