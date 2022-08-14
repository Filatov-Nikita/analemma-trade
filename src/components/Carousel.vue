<template>
  <q-carousel
    swipeable
    navigation
    control-color="primary"
  >
    <slot />
    <template v-slot:navigation-icon="{ active, onClick }">
      <button
        class="tw-w-[10px] tw-h-[10px] tw-rounded-full tw-m-1"
        :class="{
          'tw-bg-[#D9D9D9]': !active,
          'tw-bg-primary': active
        }"
        @click="onClick"
      ></button>
    </template>
  </q-carousel>
</template>

<script>
export default {

}
</script>

<style>

</style>
