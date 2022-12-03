<template>
  <q-page class="tw-relative">
    <div class="tw-max-w-[280px] tw-mx-auto">
      <div class="guest tw-mb-10">
        <h1 class="guest__title tw-mb-1">Подтверждение</h1>
        <p class="guest__subtitle">на номер {{ phone }} отправлен код</p>
      </div>
      <div class="tw-max-w-[280px] tw-mx-auto">
        <Form @submit="confirm">
          <AppInput
            class="tw-mb-8"
            name="kod"
            label="Телефон"
            placeholder="код из СМС"
            rules="required"
            autocomplete="one-time-code"
          />
          <AppButton size="base">Подтвердить</AppButton>
        </Form>
      </div>
    </div>
    <q-inner-loading :showing="is('get token')" />
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  beforeRouteEnter(to, from, next) {
    if(!to.query.phone) return next(from);
    return next();
  },
  computed: {
    ...mapGetters('loaders', ['is']),
    phone() {
      return this.$route.query.phone;
    }
  },
  methods: {
    ...mapActions('loaders', ['start', 'end']),
    async confirm({ kod }) {
      try {
        this.start('get token');
        await this.$store.dispatch(
          'auth/getToken',
          { kod, phone: this.$store.getters.cleanedPhone(this.phone) }
        );

        this.$back();
      } catch(e) {
        if(e?.invalidCode) return this.$q.notify({
          type: 'negative',
          message: 'Неверно введен код',
        });
        if(!e.response) throw e;
      } finally {
        this.end('get token');
      }
    }
  }
};
</script>

<style>
</style>
