<template>
  <q-page class="tw-pb-14">
    <div class="wrapper">
      <Toolbar />

      <CardUser class="tw-mb-4" />

      <div class="tw-text-center tw-mb-9">
        <router-link class="link" :to="{ name: 'profile.show' }">Редактировать профиль</router-link>
      </div>

      <MenuList class="tw-mb-4">
        <MenuListItem custom label="Мои заказы" icon="cart" @click="orders = true" />
        <MenuListItem label="Push уведомления" icon="alert" :to="{ name: 'push.settings' }" />
        <MenuListItem custom label="Выход" icon="logout" @click="logout" />
      </MenuList>

      <MenuList class="tw-mb-4">
        <MenuListItem label="Наши адреса" icon="geo" custom @click="showAddress"/>
      </MenuList>

      <CardHotline />
    </div>
    <VersionApp class="tw-absolute tw-inset-x-0 tw-px-4 tw-bottom-4" />
    <DialogAddress v-model="address" />
    <DialgMyOrders v-model:visible="orders" />
  </q-page>
</template>

<script>
import VersionApp from 'components/VersionApp.vue';
import MenuList from 'components/MenuList.vue';
import MenuListItem from 'components/MenuListItem.vue';
import CardHotline from 'components/CardHotline.vue';
import CardUser from 'components/CardUser.vue';
import DialogAddress from 'components/DialogAddress.vue';
import DialgMyOrders from 'components/DialgMyOrders.vue';

export default {
  data() {
    return {
      address: false,
      orders: false
    }
  },
  methods: {
    logout() {
      console.log('logout');
      this.$router.replace({ name: 'login' })
    },
    showAddress() {
      this.address = true
    }
  },
  components: {
    VersionApp,
    MenuList,
    MenuListItem,
    CardHotline,
    CardUser,
    DialogAddress,
    DialgMyOrders
  }
}
</script>

<style>

</style>
