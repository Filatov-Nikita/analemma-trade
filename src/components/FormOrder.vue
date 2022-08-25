<template>
  <Form v-slot="{ values }" @submit="onSubmit">
    <section class="tw-mb-3">
      <p class="tw-font-bold tw-text-xl tw-mb-6">Информация для заказа</p>
      <div class="tw-space-y-2">
        <AppInput name="name" label="Имя*" rules="required" />
        <AppInput name="surname" label="Фамилия*" rules="required" />
        <AppInput cellphone name="cellphone" label="Номер телефона*" rules="required" />
        <AppInput name="email" label="e-mail*" rules="required|email" />
      </div>
    </section>
    <section class="tw-mb-3">
      <p class="tw-font-bold tw-text-xl tw-mb-3">Способ получения</p>
      <AppSelect
        rules="required"
        name="delivery_type"
        label="Способ получения"
        :labelGetter="opt => opt.label"
        :options="getOpts"
      />

      <FormOrderDelivery
        :deliveryType="values.delivery_type"
        :point="values.point"
      />
    </section>
    <section class="tw-mb-3">
      <p class="tw-font-bold tw-text-xl tw-mb-4">Выберите способ оплаты</p>
      <AppSelect
        rules="required"
        name="pay_method"
        label="Способ оплаты"
        :labelGetter="opt => opt.label"
        :options="payOpts"
      />
    </section>

    <slot name="total" />

    <FormOrderAttension :deliveryType="values.delivery_type" />

    <AppButton size="base--rounded" class="tw-mt-5">
      Оформить заказ
    </AppButton>
  </Form>
</template>

<script>
import FormOrderAttension from 'components/FormOrderAttention.vue';
import FormOrderDelivery from 'components/FormOrderDelivery.vue';

export default {
  emits: ['success'],
  data() {
    return {
      getOpts: [
        {
          label: 'Самовывоз',
          value: '1'
        },
        {
          label: 'Доставка курьером',
          value: '2'
        },
      ],
      payOpts: [
        {
          label: 'Оплата при получении',
          value: '1',
          caption: 'Заказа можно оплатить картой или наличными в офисе'
        },
        {
          label: 'Картой онлайн',
          value: '2',
          caption: 'Оплата заказа банковской картой в приложении'
        },
      ]
    }
  },
  methods: {
    onSubmit({ values }) {
      console.log(values);
      this.$emit('success', values)
    },
  },
  components: {
    FormOrderAttension,
    FormOrderDelivery,
  }
}
</script>

<style>

</style>
