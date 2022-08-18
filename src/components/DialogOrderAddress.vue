<template>
  <BModal>
    <template #close>
      Назад
    </template>
    <div class="tw-px-4 tw-pb-4">
      <button class="tw-py-2 active:tw-opacity-80" @click="toggle">
        {{ btnText }}
      </button>

      <DeliveryItem
        :id="1"
        address="ул. Краснодарская, д.48"
        @choose="onChoose"
      />
    </div>
  </BModal>
</template>

<script>
import DeliveryItem from './DeliveryItem.vue';

export default {
  data() {
    return {
      showedMap: false
    }
  },
  computed: {
    btnText() {
      return this.showedMap ? 'Показать списком' : 'Показать на карте';
    }
  },
  emits: ['next'],
  methods: {
    toggle() {
      this.showedMap = !this.showedMap;
    },
    onChoose(item) {
      this.$emit('next', item);
    }
  },
  components: {
    DeliveryItem
  }
};
</script>

<style>
</style>
