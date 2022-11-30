<template>
  <div class="card-primary tw-pt-5 tw-pb-2">
    <p class="card-primary__title tw-px-5 tw-mb-3">Горячая линия:</p>

    <a
      href="tel:84952564947"
      class="card-secondary tw-mx-2 tw-p-5 tw-flex tw-items-center"
      @click="open"
    >
      <span class="tw-mr-2">
        <svg class="tw-w-5 tw-h-5">
          <use xlink:href="/sprite.svg#cellphone"></use>
        </svg>
      </span>
      <span class="tw-font-bold">8 (495) 256-49-47</span>
    </a>
  </div>
</template>

<script>
import { Platform } from 'quasar';

export default {
  methods: {
    open() {
      if(!Platform.is.cordova) return;
      cordova.InAppBrowser.open('tel:+74952564947', '_system');
    }
  }
};
</script>

<style>
</style>
