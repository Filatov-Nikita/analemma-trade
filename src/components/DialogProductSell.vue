<template>
  <BModal>
    <div class="tw-px-4 tw-pb-4">
      <p class="tw-font-bold tw-text-sm tw-text-center tw-mb-4">Заказ №ХХХ-ХХХ</p>
      <div class="tw-mb-3">
        <CartItem :count="2" :prices="{ buyback: '14' }" disabledActions cantRemove />
      </div>
      <Form @submit="1">
        <section class="tw-mb-1">
          <p class="tw-font-bold tw-text-xl tw-mb-4">Выберите способ оплаты</p>
          <AppSelect
            rules="required"
            name="pay_method"
            label="Способ оплаты"
            :labelGetter="opt => opt.label"
            :options="payOpts"
          />
        </section>
        <CardOrderTotal />
        <FormOrderAttention :deliveryType="{ value: '2' }" />
        <AppButton class="tw-mt-6" size="base--rounded" type="submit">
          Продать
        </AppButton>
      </Form>
    </div>
  </BModal>
</template>

<script>
import CartItem from './CartItem.vue';
import CardOrderTotal from './CardOrderTotal.vue';
import FormOrderAttention from './FormOrderAttention.vue';

export default {
  data() {
    return {
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
  components: {
    CartItem,
    CardOrderTotal,
    FormOrderAttention
  }
}
</script>

<style>

</style>
