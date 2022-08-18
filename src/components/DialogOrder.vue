<template>
  <BModal>
    <div class="tw-px-4 tw-pb-4">
      <p class="tw-text-center tw-font-bold tw-text-sm tw-mb-6">Заказ №000234</p>
      <button
        class="tw-mb-2"
        :class="[btnClasses]"
        @click="$emit('close')"
      >
        Изменить состав заказа
      </button>

      <CartListItem class="tw-mb-6" cantRemove />

      <div class="tw-flex tw-items-end tw-mb-8">
        <p class="tw-font-medium tw-text-xs tw-text-[#515151]">Итого к оплате:</p>
        <q-space class="tw-border-b tw-border-[#C5C5C5] tw-border-dashed tw-mx-1 tw-mb-1" />
        <p class="tw-font-bold tw-text-primary tw-text-xl tw-leading-none">0 ₽</p>
      </div>

      <FormOrder @success="onSuccess">
        <template #total>
          <CardOrderTotal />
        </template>
      </FormOrder>
    </div>
  </BModal>
</template>

<script>
import CartListItem from 'components/CartListItem.vue';
import FormOrder from 'components/FormOrder.vue';
import CardOrderTotal from 'components/CardOrderTotal.vue';

export default {
  emits: ['close', 'success'],
  data() {
    return {
      btnClasses: 'tw-block tw-w-full tw-border tw-border-primary tw-font-light tw-text-base tw-rounded-[10px] tw-py-2 tw-px-4 active:tw-opacity-70'
    }
  },
  methods: {
    onSuccess(values) {
      this.$emit('close');
      this.$emit('success', values);
    }
  },
  components: {
    CartListItem,
    FormOrder,
    CardOrderTotal,
  }
}
</script>

<style>

</style>
