<template>
  <router-view />
  <DialogCart
    :visible="$store.getters['cart/showed']"
    @update:visible="$store.commit('cart/toggle', false)"
    @next="orderShowed = true"
  />
  <DialogOrder
    v-model:visible="orderShowed"
    @close="orderShowed = false"
    @success="onSuccess"
  />
  <DialogOrderSuccess ref="success" />
</template>

<script>
import { defineComponent } from 'vue'
import DialogCart from 'components/DialogCart.vue';
import DialogOrder from 'components/DialogOrder.vue';
import DialogOrderSuccess from 'components/DialogOrderSuccess.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      orderShowed: false,
    }
  },
  methods: {
    onSuccess() {
      this.$refs.success.show();
    }
  },
  components: {
    DialogCart,
    DialogOrder,
    DialogOrderSuccess
  }
})
</script>
