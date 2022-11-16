<template>
  <q-page class="page-py">
    <div class="wrapper">
      <Toolbar class="tw-mb-8" title="Мои данные" />

      <Form class="tw-relative" @submit="onSubmit" :initialValues="initial">
        <div class="tw-mb-10 tw-flex">
          <UserAvatar
            class="tw-mr-4 tw-shrink-0"
            name="avatar"
            :src="user.avatar ? $imgSrc(user.avatar.src) : undefined"
          />
          <UserData
            class="tw-grow"
            v-bind="{ name: user.name, lastname: user.last_name, patronimyc: user.otch }"
          />
        </div>

        <div class="tw-space-y-1">
          <AppInput
            labelClass="tw-uppercase"
            name="db"
            label="Дата рождения"
            placeholder="01.01.2000"
            mask="##.##.####"
            rules="date"
          />
          <AppInput
            disabled
            readonly
            labelClass="tw-uppercase"
            name="phone"
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
            rules="address"
            name="address"
            label="АДРЕС ДОСТАВКИ"
            placeholder="Введите адрес"
          />
        </div>
        <AppButton class="tw-mt-7" type="submit" size="xl">
          Сохранить
        </AppButton>
        <q-inner-loading :showing="is('updating')" />
      </Form>
    </div>
  </q-page>
</template>

<script>
import UserData from 'components/UserData.vue';
import UserAvatar from 'components/UserAvatar.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('profile', ['user']),
    ...mapGetters('loaders', ['is']),
    initial() {
      return {
        ...this.user,
        avatar: null
      }
    }
  },
  methods: {
    ...mapActions('profile', ['update']),
    ...mapActions('loaders', ['start', 'end']),
    async onSubmit(values) {
      this.start('updating');
      values = Object.fromEntries(Object.entries(values).filter(val => !!val[1]));
      await this.update({ body: values });
      this.end('updating');
      this.$q.notify({ type: 'positive', message: 'Данные успешно обновлены' });
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
