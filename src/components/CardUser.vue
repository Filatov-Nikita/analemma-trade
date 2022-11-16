<template>
  <div>
    <div class="tw-w-[115px] tw-h-[115px] tw-mx-auto tw-mb-8">
      <q-img class=" tw-rounded-full" v-if="user?.avatar" :src="$imgSrc(user.avatar.src)" />
      <span v-else>
        <svg class="tw-w-full tw-h-full">
          <use xlink:href="/sprite.svg#profile"></use>
        </svg>
      </span>
    </div>

    <div class="tw-text-center tw-text-[#2E2E2E] tw-text-2xl">
      <p v-if="user?.name">{{ user.name }}</p>
      <router-link v-else-if="!isAuth" :to="{ name: 'login' }">Войти</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    user: {
      default: undefined,
      type: Object
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuth'])
  }
}
</script>

<style>

</style>
