<template>
  <p class="tw-text-center" v-if="isEmpty">Нет уведомлений</p>
  <div class="tw-space-y-6" v-else v-bind="$attrs">
    <div v-for="(group, key) in groups" :key="key">
      <p class="tw-px-3 tw-text-[#565656] tw-font-light tw-mb-2">{{ key }}</p>
      <div class="tw-space-y-2">
        <PushItem
          v-for="(item, i) in  group"
          :key="i"
          :header="item.header"
          :text="item.text"
          :read="item.is_readed === '0' ? false : true"
        />
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
  computed: {
    isEmpty() {
      return Object.values(this.groups).length <= 0
    }
  },
  components: {
    PushItem
  }
}
</script>

<style>

</style>
