<template>
  <Field
    v-if="deliveryType?.value === '2'"
    name="point"
    label="Пункт выдачи"
    rules="required"
    v-slot="{ handleChange, errorMessage }"
  >
    <ButtonAddress
      v-bind="{ point, errorMessage }"
      @click="showAddress"
    />
    <DialogOrderAddress
      v-model:visible="showedAddress"
      @next="setAddress($event, handleChange)"
    />
  </Field>

  <div
    v-else-if="deliveryType?.value === '3'"
    class="card-secondary tw-pb-6 tw-px-5 tw-pt-4"
  >
    <AppInput
      rules="required"
      name="delivery.street"
      label="Адрес доставки (город, улица)"
    />
    <div class="tw-flex -tw-mx-4">
      <div class="tw-w-1/2 tw-px-4">
        <AppInput rules="required" name="delivery.house" label="Дом" />
      </div>
      <div class="tw-w-1/2 tw-px-4">
        <AppInput rules="required" name="delivery.flat" label="Квартира" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAddress from 'components/ButtonAddress.vue';
import DialogOrderAddress from 'components/DialogOrderAddress.vue';

export default {
  props: {
    deliveryType: {
      default: undefined,
      type: Object
    },
    point: {
      default: undefined,
      type: Object
    }
  },
  data() {
    return {
      showedAddress: false,
    }
  },
  methods: {
    setAddress(point, handleChange) {
      handleChange(point);
      this.showedAddress = false;
    },
    showAddress() {
      this.showedAddress = !this.showedAddress
    },
  },
  components: {
    ButtonAddress,
    DialogOrderAddress,
  }
};
</script>

<style>
</style>
