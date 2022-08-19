<template>
  <q-page>
    <div class="wrapper">
      <Toolbar class="tw-relative tw-z-50" />
      <yandex-map
        class="tw-absolute tw-inset-0 tw-z-0"
        :controls="[]"
        :coords="$store.state.address[id]?.coords"
        zoom="12"
        @map-was-initialized="init"
      >
        <ymap-marker
          :icon="$yMarker"
          :marker-id="id"
          :coords="$store.state.address[id]?.coords"
        />
      </yandex-map>
    </div>
    <q-dialog seamless :modelValue="true" position="bottom" class="dialog-bottom">
      <div class="tw-mb-10 tw-px-4">
        <div class="card-primary tw-bg-white tw-p-[6px]">
          <div class="card-secondary tw-p-4 tw-mb-2">
            {{ $store.state.address[id]?.name }}
          </div>
          <AppButton size="xl" @click="onClick">Проложить маршрут</AppButton>
        </div>
      </div>
    </q-dialog>
  </q-page>
</template>

<script>
import { loadYmap } from 'vue-yandex-maps'

export default {
  props: {
    id: {
      required: true,
      type: [String, Number]
    }
  },
  setup() {
    return {
      map: null,
    }
  },
  methods: {
    async init(map) {
      this.map = map;
    },
    async getMyLocation() {
      await loadYmap();

      const geolocation = ymaps.geolocation;

      const result = await geolocation.get({
          provider: 'yandex',
          mapStateAutoApply: true
      });

      return result.geoObjects.position
    },
    async createRoute() {
      await loadYmap();

      const multiRoute = new ymaps.multiRouter.MultiRoute({
          referencePoints: [
              await this.getMyLocation(),
              this.$store.state.address[this.id]?.name
          ],
      }, {
         boundsAutoApply: true
      });

      this.map.geoObjects.add(multiRoute);
    },
    async onClick() {
      this.createRoute();
    }
  }
}
</script>
