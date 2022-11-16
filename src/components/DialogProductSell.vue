<template>
  <BModal>
    <div class="tw-px-4 tw-pb-4 tw-relative">
      <p class="tw-font-bold tw-text-sm tw-text-center tw-mb-4">Заказ №{{ item.order_id }}</p>
      <div class="tw-mb-3">
        <CartItem :item="item" cantRemove @reduce="count--" @inc="count++" :count="count" :max="+item.kol" />
      </div>
      <Form @submit="onSubmit">
        <section class="tw-mb-1">
          <p class="tw-font-bold tw-text-xl tw-mb-4">Выберите способ оплаты</p>
          <AppSelect
            rules="required"
            name="sposob"
            label="Способ оплаты"
            :labelGetter="opt => opt.label"
            :options="payOpts"
          />
        </section>
        <CardOrderTotal :len="1" :totalCost="totalCost" />
        <FormOrderAttention :deliveryType="{ value: '2' }" />
        <AppButton class="tw-mt-6" size="base--rounded" type="submit">
          Продать
        </AppButton>
      </Form>
      <q-inner-loading :showing="is('sell')" />
    </div>
  </BModal>
</template>

<script>
import CartItem from './CartItem.vue';
import CardOrderTotal from './CardOrderTotal.vue';
import FormOrderAttention from './FormOrderAttention.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      count: 1,
      payOpts: [
        {
          label: 'Оплата в офисе',
          value: '1',
          caption: 'Деньги можно получить на карту или наличными в офисе'
        },
        {
          label: 'Картой на карту',
          value: '2',
          caption: 'Вы получите деньги на банковскую карту'
        },
      ]
    }
  },
  computed: {
    ...mapGetters('loaders', ['is']),
    totalCost() {
      return this.count * +this.item.price3
    }
  },
  methods: {
    ...mapActions('loaders', ['start', 'end']),
    ...mapActions('orders', ['sell']),
    async onSubmit(values) {
      this.start('sell');
      await this.sell({
        id: this.item.id,
        kol: this.count,
        sposob: values.sposob.label
      });
      this.end('sell');
      this.$emit('update:visible', false);
      this.$q.notify({ type: 'positive', message: 'Заявка на продажу успешно сформирована.' });
    }
  },
  components: {
    CartItem,
    CardOrderTotal,
    FormOrderAttention
  }
}
</script>

<style>

</style>
