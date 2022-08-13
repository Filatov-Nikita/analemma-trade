<template>
  <div class="tw-space-y-6">
    <div v-for="(group, key) in groups" :key="key">
      <p class="tw-px-3 tw-text-[#565656] tw-font-light tw-mb-2">{{ key }}</p>
      <div class="tw-space-y-2">
        <PushItem v-for="(item, i) in  group" :key="i" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
import PushItem from './PushItem.vue';

export default {
  props: {
    groups: {
      required: true,
      type: Object
    }
  },
  components: {
    PushItem
  }
}
</script>

<style>

</style>
