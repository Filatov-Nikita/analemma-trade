<template>
  <BModal>
    <template #close>
      Назад
    </template>
    <div class="tw-px-4 tw-pb-4">
      <button class="tw-py-2 active:tw-opacity-80 tw-mb-2" @click="toggle">
        {{ btnText }}
      </button>

      <DeliveryList v-if="!showedMap" :items="items" @choose="onChoose" />
      <MapPoints v-else :items="allPoints" @choose="onChoose" />
    </div>
  </BModal>
</template>

<script>
import DeliveryList from './DeliveryList.vue';
import MapPoints from './MapPoints.vue';

export default {
  data() {
    return {
      items: [
        {
          name: 'г. Москва',
          points: [
            {
              id: 1,
              street: 'ул. Краснодарская, д.48',
              coords: [55.676550, 37.761177]
            },
            {
              id: 2,
              street: 'ул. Краснодарская, д.60',
              coords: [55.876550, 39.761177]
            },
          ]
        },
        {
          name: 'г. Санкт-Петербург',
          points: [
            {
              id: 3,
              street: 'ул. Невская, д.62',
              coords: [55.976550, 40.761177]
            },
            {
              id: 4,
              street: 'ул. Невская, д.78',
              coords: [56.876550, 41.761177]
            },
          ]
        },
      ],
      showedMap: false,
    }
  },
  computed: {
    allPoints() {
      let arr = [];
      this.items.forEach(item => {
        arr = [...arr, ...item.points];
      });
      return arr;
    },
    btnText() {
      return this.showedMap ? 'Показать списком' : 'Показать на карте';
    }
  },
  emits: ['next'],
  methods: {
    toggle() {
      this.showedMap = !this.showedMap;
    },
    onChoose(point) {
      this.$emit('next', point);
    }
  },
  components: {
    DeliveryList,
    MapPoints
  }
};
</script>

<style>
</style>
