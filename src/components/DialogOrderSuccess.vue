<template>
  <q-dialog v-model="showed">
    <div
      class="card-primary tw-text-center tw-p-6 tw-w-full"
      style="border-radius: 22px"
    >
      <div class="tw-max-w-[260px] tw-mx-auto">
        <span class="tw-block tw-w-[96px] tw-h-[96px] tw-mx-auto tw-mb-6">
          <svg class="tw-w-full tw-h-full">
            <use xlink:href="/sprite.svg#attention"></use>
          </svg>
        </span>
        <p class="tw-font-bold tw-text-3xl tw-mb-6">Заявка успешно оформлена</p>
        <p class="tw-text-gray900">
          Наш специалист перезвонит вам для уточнения информации
        </p>
        <AppButton v-if="paymentUrl" class="tw-mt-8" size="base--rounded" @click="pay">
          Оплатить
        </AppButton>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      showed: false
    }
  },
  computed: {
    ...mapGetters('orders', ['paymentUrl']),
  },
  methods: {
    show() {
      this.showed = true;
    },
    pay() {
      this.$store.dispatch('orders/pay', { paymentUrl: this.paymentUrl })
      this.showed = false;
    }
  }
}
</script>

<style>

</style>
