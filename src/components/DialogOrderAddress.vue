<template>
  <BModal :visible="visible" v-bind="$attrs">
    <template #close>
      Назад
    </template>
    <div class="tw-px-4 tw-pb-4">
      <button
        class="tw-py-2 active:tw-opacity-80 tw-mb-2"
        v-if="items && items.length > 0"
        @click="toggle"
      >
        {{ btnText }}
      </button>

      <template v-if="items && !is('get points')">
        <DeliveryList v-if="!showedMap" :items="items" @choose="onChoose" />
        <MapPoints v-else :items="allPoints" @choose="onChoose" />
      </template>
      <q-skeleton v-if="is('get points')" class="tw-w-full" type="rect" height="150px" />
    </div>
  </BModal>
</template>

<script>
import DeliveryList from './DeliveryList.vue';
import MapPoints from './MapPoints.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    visible: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      showedMap: false,
    }
  },
  computed: {
    ...mapGetters('points', { points: 'items' }),
    ...mapGetters('loaders',  ['is']),
    items() {
      if(this.points === null) return null;

      let map = {};

      this.points.forEach((item) => {
        if(!map[item.city]) map[item.city] = { name: item.city, points: [] };
        map[item.city].points.push({
          id: +item.id,
          street: item.address,
          coords: item.geo
        })
      });

      return Object.values(map);
    },
    allPoints() {
      if(this.items === null) return null;
      let arr = [];
      this.items.forEach(item => arr.push(...item.points));
      return arr;
    },
    btnText() {
      return this.showedMap ? 'Показать списком' : 'Показать на карте';
    }
  },
  emits: ['next'],
  methods: {
    ...mapActions('points', ['list']),
    ...mapActions('loaders', ['start', 'end']),
    toggle() {
      this.showedMap = !this.showedMap;
    },
    onChoose(point) {
      this.$emit('next', point);
    }
  },
  watch: {
    async visible(val) {
      if(!val) return;
      this.start('get points');
      this.items ?? await this.list();
      this.end('get points');
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
