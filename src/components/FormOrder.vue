<template>
  <Form class="tw-relative" v-slot="{ values }" :initialValues="initial" @submit="onSubmit">
    <section class="tw-mb-3">
      <p class="tw-font-bold tw-text-xl tw-mb-6">Информация для заказа</p>
      <div class="tw-space-y-2">
        <AppInput name="name" label="Имя*" rules="required" />
        <AppInput name="last_name" label="Фамилия*" rules="required" />
        <AppInput cellphone name="phone" label="Номер телефона*" rules="required|cellphone" />
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
        name="payment"
        label="Способ оплаты"
        :labelGetter="opt => opt.label"
        :options="payOpts"
      />
    </section>

    <slot name="total"></slot>

    <FormOrderAttension :deliveryType="values.delivery_type" />

    <AppButton size="base--rounded" class="tw-mt-5">
      Оформить заказ
    </AppButton>

    <q-inner-loading :showing="is('order')"/>
  </Form>
</template>

<script>
import FormOrderAttension from 'components/FormOrderAttention.vue';
import FormOrderDelivery from 'components/FormOrderDelivery.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  emits: ['success'],
  data() {
    return {
      getOpts: [
        {
          label: 'Самовывоз',
          value: '2'
        },
        {
          label: 'Доставка курьером',
          value: '3'
        },
      ],
      payOpts: [
        {
          label: 'Оплата при получении',
          value: '2',
          caption: 'Заказа можно оплатить картой или наличными в офисе'
        },
        {
          label: 'Картой онлайн',
          value: '5',
          caption: 'Оплата заказа банковской картой в приложении'
        },
      ]
    }
  },
  computed: {
    ...mapGetters('profile', ['user', 'address']),
    ...mapGetters('loaders', ['is']),
    ...mapGetters('cart', ['items']),
    initial() {
      let { name, last_name, phone, email } = this.user;
      phone = '8' + phone.slice(1);

      return {
        name, last_name, email, phone, delivery: this.address
      }
    }
  },
  methods: {
    ...mapActions('loaders', ['start', 'end']),
    async onSubmit(values) {
      const delivery = values.delivery_type.value;
      let newVals = { delivery };

      if(delivery === '2') {
        newVals.point = values.point.street;
      } else {
        const { street, house, flat } = values.delivery;
        newVals.address = `ул. ${street}, дом: ${house}, квартира: ${flat}`;
      }

      const { name, last_name, phone, email } = values;

      newVals = {
        name, last_name, phone, email, payment: values.payment.value,
        ...newVals,
      };

      const formData = new FormData();
      for (let key in newVals) {
        formData.append(key, newVals[key]);
      }

      const items = Object.values(this.items || {});
      items.forEach((item, index) => {
        formData.append(`tovars[${index}][id]`, item.id);
        formData.append(`tovars[${index}][kol]`, item.count);
      });

      this.start('order');
      await this.$store.dispatch('orders/create', formData);
      this.end('order');

      this.$store.commit('cart/toggle', false);
      this.$store.dispatch('cart/clear');
      this.$emit('success');
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
