<template>
  <q-page class="page-py">
    <div class="wrapper">
      <Toolbar class="tw-mb-8" title="Мои данные" />

      <Form @submit="onSubmit">
        <div class="tw-mb-10 tw-flex">
          <UserAvatar class="tw-mr-4 tw-shrink-0" name="avatar" rules="size:5000" src="/avatar.jpg" />
          <UserData class="tw-grow" v-bind="{ name: 'Виктор', surname: 'Павлов' }" />
        </div>

        <div class="tw-space-y-1">
          <AppInput
            labelClass="tw-uppercase"
            name="birthday"
            label="Дата рождения"
            placeholder="01.01.2000"
          />
          <AppInput
            labelClass="tw-uppercase"
            name="cellphone"
            label="Ваш телефон"
            placeholder="Введите телефон"
          />
          <AppInput
            labelClass="tw-uppercase"
            name="email"
            label="E-MAIL"
            rules="email"
            placeholder="ivanov@domain.ru"
          />
          <AppInput
            labelClass="tw-uppercase"
            name="address"
            label="АДРЕС ДОСТАВКИ"
            placeholder="Введите адрес"
          />
        </div>
        <AppButton class="tw-mt-7" type="submit" size="xl">Сохранить</AppButton>
      </Form>
    </div>
  </q-page>
</template>

<script>
import UserData from 'components/UserData.vue';
import UserAvatar from 'components/UserAvatar.vue';

export default {
  methods: {
    onSubmit(values) {
      console.log(values);
    }
  },
  components: {
    UserData,
    UserAvatar
  }
};
</script>

<style>
</style>
