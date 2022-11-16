<template>
  <q-page class="tw-relative">
    <div class="safe-pt tw-absolute tw-right-3 tw-top-0">
      <button class="tw-block" @click="$router.back()">
        <svg class="tw-h-6 tw-w-6">
          <use xlink:href="/sprite.svg#close"></use>
        </svg>
      </button>
    </div>

    <div class="tw-max-w-[280px] tw-mx-auto">
      <div class="guest tw-mb-10">
        <h1 class="guest__title tw-mb-1">Вход</h1>
        <p class="guest__subtitle">в личный кабинет</p>
      </div>
      <Form @submit="login">
        <AppInput
          class="tw-mb-8"
          name="phone"
          label="Телефон"
          placeholder="8 (___) - __ - __ - ___"
          cellphone
          rules="required|cellphone"
        />
        <AppButton size="base">Продолжить</AppButton>
      </Form>
    </div>
    <q-inner-loading :showing="is('get token')" />
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('loaders', ['is']),
  },
  methods: {
    ...mapActions('loaders', ['start', 'end']),
    async login({ phone }) {
      this.start('get token');
      const result = await this.$store.dispatch('auth/login', {
        phone: this.$store.getters.cleanedPhone(phone)
      });

      if(result) {
        this.$router.replace({ name: 'confirm', query: { phone } });
      }

      this.end('get token');
    }
  }
};
</script>

<style>
</style>
